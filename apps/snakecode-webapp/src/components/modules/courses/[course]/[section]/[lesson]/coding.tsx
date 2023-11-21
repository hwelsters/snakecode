import { useContext, useState } from 'react'

import { python } from '@codemirror/lang-python'
import CodeMirror from '@uiw/react-codemirror'

import { PyodideContext } from '@/providers/pyodide-provider'

import theme from './theme'

export default function Coding() {
  const [value, setValue] = useState<string>('')
  const [output, setOutput] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const { runPython, isPyodideLoading } = useContext(PyodideContext)

  const onChange = (val: string, _: any) => {
    setValue(val)
  }

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)
    try {
      setOutput(await runPython(value))
    } catch (error: any) {
      // Fix at the moment
      setOutput('❌ there is an error in your code!')
    }
    setLoading(false)
  }

  return (
    <div className="flex w-full flex-col items-center">
      <span className="text-center text-xl text-pt">It allows you to display values to the console.</span>
      <span className="mt-2 text-center font-extralight text-pt">Click the button below to continue</span>

      <form className="mt-8 w-full rounded border-2 border-bc p-4 shadow-[0_0.5rem_var(--color-primary)] dark:border-tp dark:bg-pt" onSubmit={onSubmit}>
        <CodeMirror maxHeight="128px" value={value} extensions={[python()]} theme={theme} onChange={onChange} autoFocus />
        <div className="my-4 max-h-32 w-full overflow-y-auto overflow-x-clip text-ellipsis whitespace-pre rounded-md bg-pt px-4 py-2 text-sm text-pt dark:bg-bg">{output}</div>
        <button
          className="flex w-full -translate-y-1 items-center justify-center rounded-md border-2 border-pt bg-bg p-3 font-display text-sm text-pt shadow-[0_0.25rem_var(--color-primary-text)] active:translate-y-0  active:shadow-none disabled:brightness-75 dark:border-bg dark:bg-pt dark:text-bg dark:shadow-[0_0.25rem_var(--color-background)]"
          type="submit"
          disabled={loading && isPyodideLoading}
        >
          SUBMIT
        </button>
      </form>
    </div>
  )
}
