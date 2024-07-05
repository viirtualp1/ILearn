export function getFullName(firstName: string, lastName: string) {
  if (!firstName && !lastName) {
    return ''
  }

  if (!lastName) {
    return firstName
  }

  return `${firstName} ${lastName}`
}
