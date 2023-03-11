interface DiscountCondition {
  isSatisfiedBy(screening: string): void
}

class SequenceCondition implements DiscountCondition {
  private sequence: number

  constructor(sequence: number) {
    this.sequence = sequence
  }

  isSatisfiedBy(screening: string) {
    return screening.isSequence(this.sequence)
  }
}

class PeriodCondition implements DiscountCondition {
  private dayOfWeek: string
  private startTime: number
  private endTime: number

  constructor(dayOfWeek: string, startTime: number, endTime: number) {
    this.dayOfWeek = dayOfWeek
    this.startTime = startTime
    this.endTime = endTime
  }

  isSatisfiedBy(screening: string) {
    return (
      screening.getStartTime().getDayOfWeek().equals(dayOfWeek) &&
      this.startTime.compareTo(screening.getStartTime().toLocalTime()) <= 0 &&
      this.endTime.compareTo(screening.getStartTime().toLocalTime()) >= 0
    )
  }
}
