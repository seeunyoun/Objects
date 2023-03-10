class Movie {
  private title: string
  private runningTime: number
  private fee: number
  private discountPolicy: void

  constructor(
    title: string,
    runningTime: number,
    fee: number,
    discountPolicy: void,
  ) {
    this.title = title
    this.runningTime = runningTime
    this.fee = fee
    this.discountPolicy = discountPolicy
  }

  getFee() {
    return this.fee
  }

  calculateMovieFee(screening: string) {
    return this.fee.minus(
      this.discountPolicy.calculateDiscountAmount(screening),
    )
  }
}
