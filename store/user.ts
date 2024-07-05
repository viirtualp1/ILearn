import { v7 as uid } from 'uuid'
import { UserType, type UserData } from '@/types/User'

export const useUserStore = defineStore('user', () => {
  const user = reactive<UserData>({
    id: uid(),
    firstName: 'Nikita',
    lastName: 'Zinin',
    type: UserType.TEACHER,
    class: {
      number: 10,
      symbol: 'А',
    },
  })

  const fullName = computed(() => {
    return getFullName(user.firstName, user.lastName)
  })

  const userType = computed(() => {
    return user.type === UserType.STUDENT ? 'Ученик' : 'Учитель'
  })

  return {
    user,
    fullName,
    userType,
  }
})
