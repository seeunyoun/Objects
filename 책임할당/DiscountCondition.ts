import { Screening3 } from './Screening'

enum discountConditionType {
  SEQUENCE,
  PERIOD,
}

export interface DiscontCondition3 {
  isSatisfiedBy(screening: any): boolean
}

class DiscountConditions {
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

  isSatisfiedBy(screening: any): boolean {
    if (this.type === discountConditionType.PERIOD) {
      return this.isSatifiedByPeriod(screening)
    }

    return this.isSatisfiedBySequence(screening)
  }

  isSatisfiedByPeriod(screening: any): boolean {
    return (
      this.dayOfWeek.equals(screening.getWhenScreened().getDayOfWeek()) &&
      this.startTime.compareTo(screening.getWhenScreened().toLocalTime()) <=
        0 &&
      this.endTime.isAfter(screening.getWhenScreened().toLocalTime()) >= 0
    )
  }

  isSatisfiedBySequence() {
    return this.sequence === new Screening3().getSequence()
  }
}
