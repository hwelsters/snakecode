import Link from 'next/link'

import config from '@/constants/config'

export default function Banner() {
  return (
    <div className="w-full items-center justify-center truncate bg-bc px-1 py-2 text-center text-sm font-bold tracking-wide text-pt">
      <Link href={config.banner_url}>{config.banner_message}</Link>
    </div>
  )
}
