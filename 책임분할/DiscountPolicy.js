"use strict";
class DefaultDiscountPolicy {
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
class AmountDiscountPolicy extends DefaultDiscountPolicy {
    constructor(discountAmount, conditions) {
        super(conditions);
        this.discountAmount = discountAmount;
    }
    getDiscountAmount(screening) {
        return this.discountAmount;
    }
}
class PercentDiscountPolicy extends DefaultDiscountPolicy {
    constructor(percent, conditions) {
        super(conditions);
        this.percent = percent;
    }
    getDiscountAmount(sceening) {
        return sceening.getMovieFee().times(this.percent);
    }
}
class NoneDiscountPolicy {
    calcaulateDiscountAmount(screening) {
        return Money.ZERO;
    }
}
