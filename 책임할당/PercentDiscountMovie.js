"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Movie_1 = require("./Movie");
class PercentDiscountMovie extends Movie_1.Movie3 {
    constructor(title, runningTime, fee, discountConditions, percent) {
        super(title, runningTime, fee, discountConditions);
        this.percent = percent;
    }
    calculateDiscountAmount() {
        return this.getFee() * this.percent;
    }
}
