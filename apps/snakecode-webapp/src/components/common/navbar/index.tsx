import Link from 'next/link'

import routes from '@/constants/routes'

export default function Navbar() {
  return (
    <nav className="flex h-14 w-full justify-center border-b-2 border-bc bg-bg p-2">
      <span className="flex w-full max-w-6xl justify-between px-6">
        <Link className="flex flex-row items-center font-sans text-3xl font-extrabold text-pt" href={routes.root}>
          <span className="mr-2 translate-y-0.5 scale-100 font-black text-pc">&#62;</span>
          <span className="hidden text-pc dark:text-pt sm:flex">snakecode</span>
        </Link>

        <Link
          className="flex items-center justify-center space-x-2 bg-pt px-4 py-1 font-display font-extrabold tracking-widest text-bg duration-100 ease-linear hover:scale-[1.025] hover:bg-pc hover:text-white active:scale-100"
          href={routes.login}
        >
          <span>Login</span>
        </Link>
      </span>
    </nav>
  )
}
