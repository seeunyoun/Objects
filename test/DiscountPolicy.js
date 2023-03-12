"use strict";
class DiscountPolicy {
    constructor(conditions) {
        this.conditions = conditions;
    }
    calculateDiscountAmount(screening, each) {
        if (each.isSatisfiedBy(screening)) {
            return getDiscountAmount(screening);
        }
        return Money.ZERO;
    }
}
class AmountDiscountPolicy extends DiscountPolicy {
    constructor(discountAmount, conditions) {
        super(conditions);
        this.discountAmount = discountAmount;
    }
    getDiscountAmount(screening) {
        return this.discountAmount;
    }
}
class PercentDiscountPolicy extends DiscountPolicy {
    constructor(percent, conditions) {
        super(conditions);
        this.percent = percent;
    }
    getDiscountAmount(sceening) {
        return sceening.getMovieFee().times(this.percent);
    }
}
class NoneDiscountPolicy extends DiscountPolicy {
    getDiscountAmount(screening) {
        return Money.ZERO;
    }
}
