"use strict";
class Screening {
    constructor(movie, seqence, whenScreened) {
        this.movie = movie;
        this.sequence = seqence;
        this.whenScreened = whenScreened;
    }
    getStartTime() {
        return this.whenScreened;
    }
    isSequence(seqence) {
        return this.sequence == seqence;
    }
    getMovieFee() {
        return this.movie.getFee();
    }
    reserve(customer, audienceCount) {
        return new Reservation(customer, this, calculateFee(audienceCount), audienceCount);
    }
    calculateFee(audienceCount) {
        return movie.calculateMovieFee(this).times(audienceCount);
    }
}
