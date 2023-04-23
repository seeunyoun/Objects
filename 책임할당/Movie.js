"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie3 = exports.MovieType = void 0;
const Money_1 = __importDefault(require("../\uCC45\uC784\uBD84\uD560/Money"));
var MovieType;
(function (MovieType) {
    MovieType[MovieType["AMOUNT_DISCOUNT"] = 0] = "AMOUNT_DISCOUNT";
    MovieType[MovieType["PERCENT_DISCOUNT"] = 1] = "PERCENT_DISCOUNT";
    MovieType[MovieType["NONE_DISCOUNT"] = 2] = "NONE_DISCOUNT";
})(MovieType = exports.MovieType || (exports.MovieType = {}));
class Movie3 {
    constructor(title, runningTime, fee, discountConditions, movieType, discountAmount, discountPercent) {
        this.title = title;
        this.runningTime = runningTime;
        this.fee = fee;
        this.discountConditions = discountConditions;
        this.movieType = movieType;
        this.discountAmount = discountAmount;
        this.discountPercent = discountPercent;
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
    calculateDiscountAmount() {
        switch (this.movieType) {
            case AMOUNT_DISCOUNT: {
                return this.calculateAmountDiscountAmount();
            }
            case PERCENT_DISCOUNT: {
                return this.calculatePercentDiscountAmount();
            }
            default: {
                return this.calculateNoneDiscountAmount();
            }
        }
    }
    calculateAmountDiscountAmount() {
        return this.discountAmount;
    }
    calculatePercentDiscountAmount() {
        return this.fee.times(this.discountPercent);
    }
    calculateNoneDiscountAmount() {
        return Money_1.default.ZERO;
    }
}
exports.Movie3 = Movie3;
