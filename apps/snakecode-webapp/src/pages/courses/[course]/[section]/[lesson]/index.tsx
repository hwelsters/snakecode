import { useRouter } from 'next/router'

import CloseIcon from '@mui/icons-material/Close'
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded'
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded'

import Coding from '@/components/modules/courses/[course]/[section]/[lesson]/coding'
import { getAllStaticPaths, getLesson } from '@/utils/content'
import removeLastPathSegment from '@/utils/removeLastPathSegment'

export default function Lesson() {
  const router = useRouter()

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-bg">
      <div className="absolute flex h-screen w-screen items-start justify-start text-pt">
        <button className="ml-5 mt-5 rounded-md p-2 hover:bg-bc" type="button" aria-label="go back to home" onClick={() => router.push(removeLastPathSegment(router.asPath))}>
          <CloseIcon className="z-10 scale-125" />
        </button>
      </div>
      <div className="z-10 flex w-full max-w-lg flex-col items-center">
        <Coding />
        <span className="mt-8 flex w-full max-w-sm flex-row justify-between">
          <button
            className="rounded-md border-2 p-2 text-pt shadow-[0_0.25rem_var(--color-primary)] active:translate-y-1 active:shadow-none dark:border-[var(--color-transparent)] dark:bg-pt dark:text-bg"
            type="button"
            aria-label="previous page"
          >
            <KeyboardArrowLeftRoundedIcon />
          </button>
          <button
            className="rounded-md border-2 p-2 text-pt shadow-[0_0.25rem_var(--color-primary)] active:translate-y-1 active:shadow-none dark:border-[var(--color-transparent)] dark:bg-pt dark:text-bg"
            type="button"
            aria-label="next page"
          >
            <KeyboardArrowRightRoundedIcon />
          </button>
        </span>
        <span className="mt-10 h-3 w-full rounded-lg bg-bc">
          <div className="h-full rounded-lg bg-pc" style={{ width: `${2 * (100 / 3)}%` }} />
        </span>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  return {
    paths: getAllStaticPaths(),
    fallback: false
  }
}

export const getStaticProps = async (context: any) => {
  return {
    props: {
      lesson: getLesson(context.params.course, context.params.section, context.params.lesson)
    }
  }
}
