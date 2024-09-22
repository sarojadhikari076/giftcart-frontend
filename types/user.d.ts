export type User = {
  name: string
  email: string
  phone: string
  address: string
  gender: string
  dateOfBirth: string
  password: string
  confirmPassword: string
}

export type BasicDetails = Omit<User, 'password' | 'confirmPassword'>
