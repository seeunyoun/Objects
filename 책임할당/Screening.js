"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Screening3 = void 0;
const Movie_1 = require("./Movie");
class Screening3 {
    constructor(customer, audienceCount, movie, sequence, whenScreened) {
        this.customer = customer;
        this.audienceCount = audienceCount;
        this.movie = movie;
        this.sequence = sequence;
        this.whenScreened = whenScreened;
    }
    reserve(customer, audienceCount) {
        return new Reservation(customer, this, this.calculateFee(audienceCount), audienceCount);
    }
    calculateFee(audienceCount) {
        return new Movie_1.Movie3().calculateMovieFee(this).times(audienceCount);
    }
    getWhenScreened() {
        return this.whenScreened;
    }
    getSequence() {
        return this.sequence;
    }
}
exports.Screening3 = Screening3;
