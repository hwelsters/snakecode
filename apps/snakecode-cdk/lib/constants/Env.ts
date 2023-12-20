import dotenv from 'dotenv'
import { cleanEnv, str } from 'envalid'

dotenv.config()

// Log an error message and exit (in Node) if any required env variables are missing
const Env = cleanEnv(process.env, {
  GOOGLE_CLIENT_ID: str(),
  GOOGLE_CLIENT_SECRET: str(),

  FACEBOOK_CLIENT_ID: str(),
  FACEBOOK_CLIENT_SECRET: str(),

  APPLE_CLIENT_ID: str(),
  APPLE_CLIENT_SECRET: str(),
  APPLE_KEY_ID: str(),
  APPLE_PRIVATE_KEY: str(),
  APPLE_TEAM_ID: str(),
})

export default Env
