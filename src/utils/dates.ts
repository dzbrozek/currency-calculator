import subDays from 'date-fns/subDays';

export function getLastWorkingDay(date: Date) {
  const day = date.getDay();
  if (day === 0) {
    // sunday
    return subDays(date, 2);
  } else if (day === 6) {
    // saturday
    return subDays(date, 1);
  }
  return date;
}
