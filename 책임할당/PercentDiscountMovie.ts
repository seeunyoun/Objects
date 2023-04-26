import { Movie3 } from './Movie'

class PercentDiscountMovie extends Movie3 {
  private percent: number

  constructor(
    title: string,
    runningTime: number,
    fee: number,
    discountConditions: any,
    percent: number,
  ) {
    super(title, runningTime, fee, discountConditions)
    this.percent = percent
  }

  calculateDiscountAmount() {
    return this.getFee() * this.percent
  }
}
