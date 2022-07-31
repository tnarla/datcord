import { supabase } from "../supabaseClient"

export function SignIn() {

  async function signInWithDiscord() {
    const { user, session, error } = await supabase.auth.signIn({
      provider: 'discord',
    })
  }

  return <button onClick={signInWithDiscord}>Sign in with Discord</button>
}