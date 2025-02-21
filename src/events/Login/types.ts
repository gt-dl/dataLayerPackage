export type LoginName = 'email' | 'google' | 'facebook' | 'password'

export type LoginProps = {
  method: LoginName
}