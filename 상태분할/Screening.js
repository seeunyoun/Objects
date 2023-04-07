"use strict";
class Screening2 {
    constructor(movie, sequence, whenScreened) {
        this.movie = movie;
        this.sequence = sequence;
        this.whenScreened = whenScreened;
    }
    getMovie() {
        return this.movie;
    }
    setMovie(movie) {
        this.movie = movie;
    }
    getWhenScreened() {
        return this.whenScreened;
    }
    setWhenScreened(whenScreened) {
        this.whenScreened = whenScreened;
    }
    getSequence() {
        return this.sequence;
    }
    setSequence(sequence) {
        this.sequence = sequence;
    }
}
