export interface discountConditionType {
  SEQUENCE: string
  PERIOD: string
}

export class DiscountCondition2 {
  private type: discountConditionType
  private sequence: number

  private dayOfWeek: number
  private startTime: number
  private endTime: number

  constructor(
    type: discountConditionType,
    sequence: number,
    dayOfWeek: number,
    startTime: number,
    endTime: number,
  ) {
    this.type = type
    this.sequence = sequence
    this.dayOfWeek = dayOfWeek
    this.startTime = startTime
    this.endTime = endTime
  }

  getType() {
    return this.type
  }

  setType(type: discountConditionType) {
    this.type = type
  }

  getDayOfWeek() {
    return this.dayOfWeek
  }

  setDayOfWeek(dayOfWeek: number) {
    this.dayOfWeek = dayOfWeek
  }

  getStartTime() {
    return this.startTime
  }

  setStartTime(startTime: number) {
    this.startTime = startTime
  }

  getEndTime() {
    return this.endTime
  }

  setEndTime(endTime: number) {
    this.endTime = endTime
  }

  getSequence() {
    return this.sequence
  }

  setSequence(sequence: number) {
    this.sequence = sequence
  }
}
