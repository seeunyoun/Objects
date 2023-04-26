import Money from '../책임분할/Money'

export enum MovieType {
  AMOUNT_DISCOUNT,
  PERCENT_DISCOUNT,
  NONE_DISCOUNT,
}

export class Movie3 {
  protected title: string
  protected runningTime: number
  protected fee: number
  protected discountConditions: any

  // private movieType: MovieType
  // private discountAmount: number
  // private discountPercent: number

  constructor(
    title: string,
    runningTime: number,
    fee: number,
    discountConditions: any,
    // movieType: MovieType,
    // discountAmount: number,
    // discountPercent: number,
  ) {
    this.title = title
    this.runningTime = runningTime
    this.fee = fee
    this.discountConditions = discountConditions
    // this.movieType = movieType
    // this.discountAmount = discountAmount
    // this.discountPercent = discountPercent
  }

  calculateMovieFee(screening: any) {
    if (this.isDiscountable(screening)) {
      return this.fee.minus(this.calcaulateDiscountAmount())
    }

    return this.fee
  }

  isDiscountable(screening: any): boolean {
    return this.discountConditions
      .stream()
      .anyMatch((condition: any) => condition.isSatisfiedBy(screening))
  }

  protected getFee() {
    return this.fee
  }

  // calculateDiscountAmount() {
  //   switch (this.movieType) {
  //     case AMOUNT_DISCOUNT: {
  //       return this.calculateAmountDiscountAmount()
  //     }
  //     case PERCENT_DISCOUNT: {
  //       return this.calculatePercentDiscountAmount()
  //     }
  //     default: {
  //       return this.calculateNoneDiscountAmount()
  //     }
  //   }
  // }

  // calculateAmountDiscountAmount() {
  //   return this.discountAmount
  // }

  // calculatePercentDiscountAmount() {
  //   return this.fee.times(this.discountPercent)
  // }

  // calculateNoneDiscountAmount() {
  //   return Money.ZERO
  // }
}
