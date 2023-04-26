"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Money_1 = __importDefault(require("../\uCC45\uC784\uBD84\uD560/Money"));
const Movie_1 = require("./Movie");
class NoneDiscountMovie extends Movie_1.Movie3 {
    constructor(title, runningTime, fee, discountConditions) {
        super(title, runningTime, fee, discountConditions);
    }
    calculateDiscountFee() {
        return Money_1.default.ZERO;
    }
}
