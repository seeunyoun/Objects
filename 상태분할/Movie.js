"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        return Collections.unmodifiableList(this.discountConditions);
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
