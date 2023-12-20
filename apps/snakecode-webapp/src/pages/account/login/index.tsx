import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth'
import { Auth } from 'aws-amplify'

import OAuthSignInButton from '@/components/modules/login/oauth-signin-button'
import appleLogo from '@public/images/logos/apple.svg'
import facebookLogo from '@public/images/logos/facebook.svg'
import googleLogo from '@public/images/logos/google.svg'

export default function Login() {
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-bg p-4 text-pt">
      <span className="mb-2 font-display text-2xl font-bold tracking-widest">Login</span>
      <span className="mb-12 font-bold tracking-widest text-st">
        nice to meet you <text className="text-pc">again</text>
      </span>

      <span className="flex w-full max-w-sm flex-col">
        <span className="mb-8 flex w-full flex-col space-y-4">
          <OAuthSignInButton logo={googleLogo} text="Google" color="bg-pc text-white" onClick={() => Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google })} />
          <OAuthSignInButton logo={facebookLogo} text="Facebook" color="bg-[#4867aa] text-white" />
          <OAuthSignInButton logo={appleLogo} text="Apple" color="bg-black text-white" />
        </span>
      </span>
    </main>
  )
}
