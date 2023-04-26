import Money from '../책임분할/Money'
import { Movie3 } from './Movie'

class NoneDiscountMovie extends Movie3 {
  constructor(
    title: string,
    runningTime: number,
    fee: number,
    discountConditions: any,
  ) {
    super(title, runningTime, fee, discountConditions)
  }

  calculateDiscountFee() {
    return Money.ZERO
  }
}
