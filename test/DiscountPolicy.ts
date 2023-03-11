abstract class DiscountPolicy {
  private conditions: string[]

  constructor(conditions: string[]) {
    this.conditions = conditions
  }

  calculateDiscountAmount(screening: string, each: any) {
    if (each.isSatisfiedBy(screening)) {
      return getDiscountAmount(screening)
    }

    return Money.ZERO
  }

  protected abstract getDiscountAmount(Screening: object)
}

class AmountDiscountPolicy extends DiscountPolicy {
  private discountAmount: number

  constructor(discountAmount: number, conditions: string[]) {
    super(conditions)
    this.discountAmount = discountAmount
  }

  protected getDiscountAmount(screening: string) {
    return this.discountAmount
  }
}

class PercentDiscountPolicy extends DiscountPolicy {
  private percent: number

  constructor(percent: number, conditions: string[]) {
    super(conditions)
    this.percent = percent
  }

  protected getDiscountAmount(sceening: string) {
    return sceening.getMovieFee().times(this.percent)
  }
}
