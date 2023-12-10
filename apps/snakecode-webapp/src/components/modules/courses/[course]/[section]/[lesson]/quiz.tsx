import { useState } from "react"
import SpeechBubble from "./speech-bubble"

interface QuizProps {
  text?: string
  options?: Array<string>
  correct?: number
  completePage?: any
}

export default function Quiz({ text, options, correct, completePage }: QuizProps) {
  // The index of the option that the user is currently selecting
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  // Keep track of whether or not the user has already answered correctly
  const [userIsCorrect, setUserIsCorrect] = useState<boolean>(false)

  const [showSpeechBubble, setShowSpeechBubble] = useState<boolean>(false)

  const checkAnswer = () => {
    if (userIsCorrect) completePage()
    if (selectedIndex === correct) setUserIsCorrect(true)
    setShowSpeechBubble(true)
  }

  return (
    <div className="flex w-full flex-col items-center">
      <span className="text-center text-xl text-pt">{text}</span>
      <span className="mt-2 text-center font-thin text-pt">Pick the correct answer</span>

      {options?.map((option: string, index: number) => {
        return (
          <button className={`mb-2 mt-4 w-full -translate-y-2 space-x-2 rounded-sm border-2 border-pt px-4 py-3 text-left text-bg transition-all duration-50 ${index === selectedIndex ? "translate-y-0 bg-pc shadow-none" : "bg-pt shadow-[0_0.5rem_var(--color-primary)]"}`} type="button" onClick={() => setSelectedIndex(index)}>
            <text className="font-bold">{index}</text>
            <text className="font-bold">::</text>
            <text className="">{option}</text>
          </button>
        )
      })}

      <button className="mt-8 -translate-y-2 rounded-sm bg-pt px-8 py-3 font-display font-extralight text-bg shadow-[0_0.5rem_var(--color-primary)] active:translate-y-0 active:shadow-none" type="button" onClick={checkAnswer}>
        {userIsCorrect ? "Continue" : "Check"}
      </button>
      {showSpeechBubble &&
        <SpeechBubble icon={userIsCorrect ? "⭐" : "❌"} title={userIsCorrect ? "Good Job!" : "Try again"} description={userIsCorrect ? "You persevered and you succeeded" : "You are so close, keep trying!"} />
      }
    </div>
  )
}
