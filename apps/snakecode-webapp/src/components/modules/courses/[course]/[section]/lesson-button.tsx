import { useRouter } from 'next/router'

import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded'
import StarRoundedIcon from '@mui/icons-material/StarRounded'

import { addPathSegment } from '@/utils/addPathSegment'

enum CourseButtonType {
  FUTURE = 0,
  CURRENT = 1,
  COMPLETED = 2
}

type CourseButtonParams = {
  title: string
  type: CourseButtonType
  href: string
}

export default function CourseButton({ title, type, href }: CourseButtonParams) {
  const router = useRouter()
  const bgColor = () => {
    if (type === CourseButtonType.COMPLETED) return 'bg-pc dark:bg-pc'
    if (type === CourseButtonType.FUTURE) return 'bg-pt'
    return 'bg-[rgb(200,200,200)] dark:bg-pt'
  }

  const shadowColor = () => {
    if (type === CourseButtonType.COMPLETED) return 'shadow-[0_0.5rem_#E99973]'
    if (type === CourseButtonType.FUTURE) return 'bg-pt'
    return 'shadow-[0_0.5rem_rgb(180,180,180)] dark:shadow-[0_0.5rem_rgb(200,200,200)]'
  }

  const icon = () => {
    if (type === CourseButtonType.COMPLETED) return <StarRoundedIcon className="scale-150 text-bg dark:text-pt" />
    if (type === CourseButtonType.FUTURE) return 'bg-pt'
    return <PlayArrowRoundedIcon className="scale-150 text-[rgb(160,160,160)] dark:text-[rgb(200,200,200)]" />
  }

  return (
    <div className="flex w-fit flex-col items-center">
      <button className={`h-12 w-12 -translate-y-2 rounded-sm ${bgColor()} ${shadowColor()} active:translate-y-0 active:shadow-none`} type="button" onClick={() => router.push(addPathSegment(href))}>
        {icon()}
      </button>

      <span className="mt-1 font-display">{title}</span>
    </div>
  )
}
