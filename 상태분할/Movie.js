"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie2 = exports.movieType = void 0;
exports.movieType = {
    AMOUNT_DISCOUNT: 'AMOUNT_DISCOUNT',
    PERCENT_DISCOUNT: 'PERCENT_DISCOUNT',
    NONE_DISCOUNT: 'NONE_DISCOUNT',
};
class Movie2 {
    constructor(title, runningTime, fee, discountConditions, movieType, discountAmount, discountPercent) {
        this.title = title;
        this.runningTime = runningTime;
        this.fee = fee;
        this.discountConditions = discountConditions;
        this.movieType = movieType;
        this.discountAmount = discountAmount;
        this.discountPercent = discountPercent;
    }
    getMovieType() {
        return this.movieType;
    }
    setMovieType(movieType) {
        this.movieType = movieType;
    }
    getFee() {
        return this.fee;
    }
    setFee(fee) {
        this.fee = fee;
    }
    getDiscountConditions() {
        // 뭔진 모르겠지만 list가 리턴.
        return Collections.unmodifiableList(this.discountConditions) || [];
    }
    setDiscountConditions(discountConditions) {
        this.discountConditions = discountConditions;
    }
    getDiscountAmount() {
        return this.discountAmount;
    }
    setDiscountAmount(discountAmount) {
        this.discountAmount = discountAmount;
    }
    getDiscountPercent() {
        return this.discountPercent;
    }
    setDiscountPercent(discountPercent) {
        this.discountPercent = discountPercent;
    }
}
exports.Movie2 = Movie2;
