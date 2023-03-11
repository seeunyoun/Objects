'use strict'
class discountPolicy {
  constructor(conditions) {
    this.conditions = conditions
  }
  calculateDiscountAmount(screening, each) {
    if (each.isSatisfiedBy(screening)) {
      return getDiscountAmount(screening)
    }
    return Money.ZERO
  }
}
