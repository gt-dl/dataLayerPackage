export type SignUpName = 'email' | 'google' | 'facebook' | 'password'

export type SignUpProps = {
  method: SignUpName
}