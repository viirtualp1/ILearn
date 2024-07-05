export enum UserType {
  STUDENT = 0,
  TEACHER = 1,
}

export interface ClassData {
  number: number
  symbol: string
}

export interface UserData {
  id: string
  firstName: string
  lastName: string
  type: UserType
  class: ClassData
}
