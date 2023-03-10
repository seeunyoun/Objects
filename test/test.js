'use strict'
class Screening {
  constructor(movie, seqence, whenScreened) {
    this.movie = movie
    this.sequence = seqence
    this.whenScreened = whenScreened
  }
  getStartTime() {
    return this.whenScreened
  }
  isSequence(seqence) {
    return this.sequence == seqence
  }
  getMovieFee() {
    return this.movie.getFee()
  }
}
