import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'
import GoogleIcon from '@mui/icons-material/Google'

import OAuthSignInButton from '@/components/modules/login/oauth-signin-button'

export default function Login() {
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-bg p-4 text-pt">
      <span className="mb-2 font-display text-2xl font-bold tracking-widest">Login</span>
      <span className="mb-12 font-bold tracking-widest text-st">
        nice to meet you <text className="text-pc">again</text>
      </span>
      <span className="mb-6 flex w-full max-w-xl flex-col justify-between space-y-4">
        <OAuthSignInButton Icon={GoogleIcon} text="Login with Google" color="bg-pc text-white" />
        <OAuthSignInButton Icon={FacebookIcon} text="Login with Facebook" color="bg-[#4867aa] text-white" />
        <OAuthSignInButton Icon={GitHubIcon} text="Login with Apple" color="bg-black text-white" />
      </span>
    </main>
  )
}
