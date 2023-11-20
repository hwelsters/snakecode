import React from 'react'

type OAuthSignInButtonPropType = {
  Icon: React.FunctionComponent
  text: string
  color: string
}

export default function OAuthSignInButton({ Icon, text, color }: OAuthSignInButtonPropType) {
  return (
    <button className={`flex-1 space-x-4 rounded px-4 py-3 font-sans font-semibold ${color} transition-all duration-75 hover:scale-[101%] active:scale-100`} type="button">
      <Icon />
      <span>{text}</span>
    </button>
  )
}
