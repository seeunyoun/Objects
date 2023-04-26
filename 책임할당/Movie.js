"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie3 = exports.MovieType = void 0;
var MovieType;
(function (MovieType) {
    MovieType[MovieType["AMOUNT_DISCOUNT"] = 0] = "AMOUNT_DISCOUNT";
    MovieType[MovieType["PERCENT_DISCOUNT"] = 1] = "PERCENT_DISCOUNT";
    MovieType[MovieType["NONE_DISCOUNT"] = 2] = "NONE_DISCOUNT";
})(MovieType = exports.MovieType || (exports.MovieType = {}));
class Movie3 {
    // private movieType: MovieType
    // private discountAmount: number
    // private discountPercent: number
    constructor(title, runningTime, fee, discountConditions) {
        this.title = title;
        this.runningTime = runningTime;
        this.fee = fee;
        this.discountConditions = discountConditions;
        // this.movieType = movieType
        // this.discountAmount = discountAmount
        // this.discountPercent = discountPercent
    }
    calculateMovieFee(screening) {
        if (this.isDiscountable(screening)) {
            return this.fee.minus(this.calcaulateDiscountAmount());
        }
        return this.fee;
    }
    isDiscountable(screening) {
        return this.discountConditions
            .stream()
            .anyMatch((condition) => condition.isSatisfiedBy(screening));
    }
    getFee() {
        return this.fee;
    }
}
exports.Movie3 = Movie3;
