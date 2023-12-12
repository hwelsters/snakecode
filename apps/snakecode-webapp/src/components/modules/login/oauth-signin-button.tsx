import type { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React from 'react'

type OAuthSignInButtonPropType = {
  logo: StaticImport
  text: string
  color: string
}

export default function OAuthSignInButton({ logo, text, color }: OAuthSignInButtonPropType) {
  return (
    <button className={`flex flex-1 flex-row items-center space-x-4 rounded px-4 py-3 font-display ${color} transition-all duration-75 hover:scale-[100.5%] active:scale-100`} type="button">
      <Image className="h-5 w-5" src={logo} alt="text" />
      <span>{text}</span>
    </button>
  )
}
