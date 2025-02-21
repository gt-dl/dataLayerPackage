export type UserInfoProps = {
  user_id: string // email criptografado em SHA256
  email: string // email sem criptografia
  first_name: string
  last_name: string
  phone: string
  zip: string
  street: string
  street_number: string
  city: string
  gender: string
  orderform_id?: string
  uf: string
  country: string 
  birthday: string
  neighborhood: string
}