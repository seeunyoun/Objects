"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Movie_1 = require("./Movie");
class AmountDiscountMovie extends Movie_1.Movie3 {
    constructor(title, runningTime, fee, discountConditions, discountAmount) {
        super(title, runningTime, fee, discountConditions);
        this.discountAmount = discountAmount;
    }
    calculateDiscountAmount() {
        return this.discountAmount;
    }
}
