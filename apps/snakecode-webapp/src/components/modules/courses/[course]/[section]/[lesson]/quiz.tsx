export default function Quiz() {
  return (
    <div className="flex w-full flex-col items-center">
      <span className="mb-3 text-center text-xl text-pt">It allows you to display values to the console.</span>
      <span className="mt-2 text-center font-thin text-pt">Select the correct option to continue</span>

      <button className="mb-2 mt-4 w-full -translate-y-1 space-x-2 rounded-sm border-2 border-pt bg-pt px-4 py-3 text-left text-bg shadow-[0_0.25rem_var(--color-primary)] focus:translate-y-0 focus:bg-pc focus:shadow-none" type="button">
        <text className="font-bold">0</text>
        <text className="font-bold">::</text>
        <text className="">This is the wrong answer</text>
      </button>

      <button className="mt-8 -translate-y-1 rounded-sm bg-pt px-8 py-4 font-display font-extralight text-bg shadow-[0_0.25rem_var(--color-primary)] active:translate-y-0 active:shadow-none" type="button">
        Check
      </button>
    </div>
  )
}
