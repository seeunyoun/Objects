interface DiscountPolicy {
  calcaulateDiscountAmount(screening: string)
}

abstract class DefaultDiscountPolicy implements DiscountPolicy {
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

class AmountDiscountPolicy extends DefaultDiscountPolicy {
  private discountAmount: number

  constructor(discountAmount: number, conditions: string[]) {
    super(conditions)
    this.discountAmount = discountAmount
  }

  protected getDiscountAmount(screening: string) {
    return this.discountAmount
  }
}

class PercentDiscountPolicy extends DefaultDiscountPolicy {
  private percent: number

  constructor(percent: number, conditions: string[]) {
    super(conditions)
    this.percent = percent
  }

  protected getDiscountAmount(sceening: string) {
    return sceening.getMovieFee().times(this.percent)
  }
}

class NoneDiscountPolicy implements DiscountPolicy {
  protected calcaulateDiscountAmount(screening: string) {
    return Money.ZERO
  }
}
