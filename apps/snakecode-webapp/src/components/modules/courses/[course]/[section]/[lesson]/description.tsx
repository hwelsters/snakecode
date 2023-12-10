interface DescriptionProps {
  text?: string
  completePage?: any
}

export default function Description({ text, completePage }: DescriptionProps) {
  return (
    <div className="flex w-full flex-col items-center">
      <span className="text-center text-xl text-pt">{text}</span>
      <span className="mt-2 text-center font-thin text-pt">Click the button below to continue</span>

      <div className="mt-4 w-full rounded-md border-2 border-bc p-4 shadow-[0_0.5rem_var(--color-primary)] dark:border-tp dark:bg-pt">
        <button
          className="flex w-full -translate-y-1 items-center justify-center rounded-md border-2 border-pt bg-bg p-3 font-display text-sm text-pt shadow-[0_0.25rem_var(--color-primary-text)] active:translate-y-0  active:shadow-none dark:border-bg dark:bg-pt dark:text-bg dark:shadow-[0_0.25rem_var(--color-background)]"
          type="submit"
          onClick={completePage}
        >
          CONTINUE
        </button>
      </div>
    </div>
  )
}
