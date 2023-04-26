import { DiscontCondition3 } from './DiscountCondition'

class PeriodCondition implements DiscontCondition3 {
  private dayOfWeek: number
  private startTime: number
  private endTime: number

  constructor(dayOfWeek: number, startTime: number, endTime: number) {
    this.dayOfWeek = dayOfWeek
    this.startTime = startTime
    this.endTime = endTime
  }

  isSatisfiedBy(screening: any): boolean {
    return (
      this.dayOfWeek(screening.getWhenScreened().getDayOfWeek()) &&
      this.startTime.compareTo(screeing.getWhenScreened().toLocalTime() <= 0) &&
      this.endTime.compareTo(screening.getWhenScreened().toLocalTime() >= 0)
    )
  }
}
