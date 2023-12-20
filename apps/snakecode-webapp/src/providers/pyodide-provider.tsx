import { createContext, useEffect, useMemo, useRef, useState } from "react";

export interface PyodideContextInterface {
  pyodide: any;
  isPyodideLoading: boolean;
  runPython: (code: string) => Promise<string>;
}

export const PyodideContext = createContext<PyodideContextInterface>({
  pyodide: null,
  isPyodideLoading: true,
  runPython: async (code: string) => code,
});

export default function PyodideProvider({ children }: { children: React.ReactNode }) {
  const pyodide = useRef<any>({ current: null });
  const hasLoadPyodideBeenCalled = useRef(false);
  const [isPyodideLoading, setIsPyodideLoading] = useState(true);

  const runPython = async (code: string) => {
    if (pyodide.current == null) {
      return "";
    }
    return pyodide?.current?.runPython(`import sys\nfrom io import StringIO\nsys.stdout = StringIO()\n${code}\nsys.stdout.getvalue()`);
  };

  useEffect(() => {
    if (!hasLoadPyodideBeenCalled.current) {
      hasLoadPyodideBeenCalled.current = true;
      (async function loadPyodide() {
        pyodide.current = await globalThis.loadPyodide();
        setIsPyodideLoading(false);
      })();
    }
  }, [pyodide, hasLoadPyodideBeenCalled, setIsPyodideLoading]);

  return (
    <PyodideContext.Provider
      value={useMemo(
        () => ({
          pyodide,
          isPyodideLoading,
          runPython,
        }),
        [pyodide, isPyodideLoading],
      )}
    >
      {children}
    </PyodideContext.Provider>
  );
}
