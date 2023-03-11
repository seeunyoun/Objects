'use strict'
class SequenceCondition {
  constructor(sequence) {
    this.sequence = sequence
  }
  isSatisfiedBy(screening) {
    return screening.isSequence(this.sequence)
  }
}
class PeriodCondition {
  constructor(dayOfWeek, startTime, endTime) {
    this.dayOfWeek = dayOfWeek
    this.startTime = startTime
    this.endTime = endTime
  }
  isSatisfiedBy(screening) {
    return (
      screening.getStartTime().getDayOfWeek().equals(dayOfWeek) &&
      this.startTime.compareTo(screening.getStartTime().toLocalTime()) <= 0 &&
      this.endTime.compareTo(screening.getStartTime().toLocalTime()) >= 0
    )
  }
}
