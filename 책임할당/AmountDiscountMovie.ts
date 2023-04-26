import { Movie3 } from './Movie'

class AmountDiscountMovie extends Movie3 {
  private discountAmount

  constructor(
    title: string,
    runningTime: number,
    fee: number,
    discountConditions: any,
    discountAmount: number,
  ) {
    super(title, runningTime, fee, discountConditions)
    this.discountAmount = discountAmount
  }

  calculateDiscountAmount() {
    return this.discountAmount
  }
}
