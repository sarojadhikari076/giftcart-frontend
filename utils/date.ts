import { addDays, isWithinInterval, setYear } from 'date-fns'

export function isBirthdayWithinNextWeek(dateOfBirth: string): boolean {
  const today = new Date()
  const nextWeek = addDays(today, 7)

  const birthday = setYear(dateOfBirth, today.getFullYear())

  const iswithin = isWithinInterval(new Date(birthday), {
    start: today,
    end: nextWeek
  })

  if (iswithin) return true
  return false
}
