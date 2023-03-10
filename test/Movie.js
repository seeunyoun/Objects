"use strict";
class Movie {
    constructor(title, runningTime, fee, discountPolicy) {
        this.title = title;
        this.runningTime = runningTime;
        this.fee = fee;
        this.discountPolicy = discountPolicy;
    }
    getFee() {
        return this.fee;
    }
    calculateMovieFee(screening) {
        return this.fee.minus(this.discountPolicy.calculateDiscountAmount(screening));
    }
}
