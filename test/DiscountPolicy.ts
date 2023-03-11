abstract class discountPolicy {
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
