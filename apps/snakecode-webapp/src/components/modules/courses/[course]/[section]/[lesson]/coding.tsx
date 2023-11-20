import { useState } from 'react'

import { python } from '@codemirror/lang-python'
import CodeMirror from '@uiw/react-codemirror'
import { loadPyodide } from 'pyodide'

import theme from './theme'

export default function Coding() {
  const [value, setValue] = useState<string>('')

  const onChange = (val: string, _: any) => {
    setValue(val)
  }

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    loadPyodide().then((pyodide) => {
      console.log(pyodide.runPython('print("Hello from Python!")'))
    })
  }

  return (
    <div className="flex w-full flex-col items-center">
      <span className="text-center text-xl text-pt">It allows you to display values to the console.</span>
      <span className="mt-2 text-center font-extralight text-pt">Click the button below to continue</span>

      <form className="mt-8 w-full rounded border-2 border-bc p-4 shadow-[0_0.5rem_var(--color-primary)] dark:border-tp dark:bg-pt" onSubmit={onSubmit}>
        <CodeMirror value={value} extensions={[python()]} theme={theme} onChange={onChange} autoFocus />
        <div className="my-4 w-full rounded-md bg-pt py-2 dark:bg-bg" />
        <button
          className="flex w-full -translate-y-1 items-center justify-center rounded-md border-2 border-pt bg-bg p-3 font-display text-sm text-pt shadow-[0_0.25rem_var(--color-primary-text)] active:translate-y-0  active:shadow-none dark:border-bg dark:bg-pt dark:text-bg dark:shadow-[0_0.25rem_var(--color-background)]"
          type="submit"
        >
          SUBMIT
        </button>
      </form>
    </div>
  )
}
