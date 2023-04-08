"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Reservation_1 = require("./Reservation");
const Movie_1 = require("./Movie");
const Money_1 = __importDefault(require("../\uCC45\uC784\uBD84\uD560/Money"));
const discountConditionType = {
    SEQUENCE: 'SEQUENCE',
    PERIOD: 'PERIOD',
};
class ReservationAgencey {
    constructor(screening, customer, movie, audienceCount, discountCondition) {
        this.movie = screening.getMovie();
        this.discountable = false;
        this.condition = movie.getDiscountConditions();
        this.sequence = discountCondition.getSequence();
        // JAVA 향상된 for문: 증감식 필요없이 파라미터에 List 넣으면 작동함.
        // 근데 TypeScript는 해당 기능이 없는 것 같음.
        // for (condition: movie.getDiscountConditions()) {
        //   if (condition.getType() === DiscountConditionType.PERIOD) {
        //     this.discountable = screening.getWhenScreened().getDayOfWeek()
        //   }
        // }
        let fee;
        for (let i = 0; i < this.condition.length; i++) {
            if (this.condition === discountConditionType.PERIOD) {
                this.discountable = screening
                    .getWhenScreened()
                    .getDayOfWeek()
                    .equals(this.condition.getDayOfWeek() &&
                    this.condition
                        .getStartTime()
                        .compareTo(screening.getWhenScreened().toLocalTime() <= 0) &&
                    this.condition
                        .getEndTime()
                        .compareTo(screening.getWhenScreened().toLocalTime() >= 0));
            }
            else {
                this.discountable = this.sequence === screening.getSequence();
            }
            if (this.discountable) {
                break;
            }
        }
        if (this.discountable) {
            let discountAmount = Money_1.default.ZERO;
            switch (movie.getMovieType()) {
                case Movie_1.movieType.AMOUNT_DISCOUNT: {
                    discountAmount = movie.getDiscountAmount();
                    break;
                }
                case Movie_1.movieType.PERCENT_DISCOUNT: {
                    discountAmount = movie.getFee().times(movie.getDiscountPercent());
                    break;
                }
                case Movie_1.movieType.NONE_DISCOUNT: {
                    discountAmount = Money_1.default.ZERO;
                    break;
                }
            }
            fee = movie.getFee().minus(discountAmount);
        }
        else {
            fee = movie.getFee();
        }
        return new Reservation_1.Reservation2(customer, screening, fee, audienceCount);
    }
}
