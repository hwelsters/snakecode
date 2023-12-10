import { useContext, useState } from 'react'

import { python } from '@codemirror/lang-python'
import CodeMirror from '@uiw/react-codemirror'

import { PyodideContext } from '@/providers/pyodide-provider'

import theme from './theme'
import SpeechBubble from './speech-bubble'

interface CodingProps {
  text?: string
  template?: string
  answer?: string
  completePage?: any
}

export default function Coding({ text, template, answer, completePage }: CodingProps) {
  const [value, setValue] = useState<string>(template ? template : "")
  const [output, setOutput] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const [isCorrect, setIsCorrect] = useState<boolean>(false)
  const [showSpeechBubble, setShowSpeechBubble] = useState<boolean>(false)

  const { runPython, isPyodideLoading } = useContext(PyodideContext)

  const onChange = (val: string, _: any) => {
    setValue(val)
  }

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (isCorrect) completePage()

    setLoading(true)
    setShowSpeechBubble(false)
    try {
      if (value.length == 0) setOutput("✒️ Your code is empty... try writing something!")
      else {
        const pythonOutput = await runPython(value)
        if (pythonOutput.trim().localeCompare(answer ? answer.trim() : "") === 0) setIsCorrect(true)
        setOutput(pythonOutput)
      }
    } catch (error: any) {
      // Fix at the moment
      setOutput('❌ there is an error in your code!')
    }
    setLoading(false)
    setShowSpeechBubble(true)
  }

  return (
    <div className="flex w-full flex-col items-center">
      <span className="text-center text-xl text-pt">{text}</span>
      <span className="mt-2 text-center font-extralight text-pt">Click the button below to continue</span>

      <form className="mt-8 w-full rounded border-2 border-bc p-4 shadow-[0_0.5rem_var(--color-primary)] dark:border-tp dark:bg-pt" onSubmit={onSubmit}>
        <CodeMirror maxHeight="128px" value={value} extensions={[python()]} theme={theme} onChange={onChange} autoFocus />
        <div className="my-4 max-h-32 w-full overflow-y-auto overflow-x-clip text-ellipsis whitespace-pre rounded-md bg-pt px-4 py-2 text-sm text-white dark:bg-bg">{output}</div>
        <button
          className="flex w-full -translate-y-1 items-center justify-center rounded-md border-2 border-pt bg-bg p-3 font-display text-sm text-pt shadow-[0_0.25rem_var(--color-primary-text)] active:translate-y-0  active:shadow-none disabled:brightness-75 dark:border-bg dark:bg-pt dark:text-bg dark:shadow-[0_0.25rem_var(--color-background)]"
          type="submit"
          disabled={loading && isPyodideLoading}
        >
          {isCorrect ? "CONTINUE" : "SUBMIT"}
        </button>
      </form>
      {showSpeechBubble ? (isCorrect ?
        <SpeechBubble icon="⭐" title="Good job!" description="You persevered and succeeded!" /> :
        <SpeechBubble icon="❌" title="Try again" description="The output doesn't quite match..." />) : ""
      }
    </div>
  )
}
