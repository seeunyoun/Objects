'use strict'
class Screening {
  constructor(customer, audienceCount, movie, sequence, whenScreened) {
    this.customer = customer
    this.audienceCount = audienceCount
    this.movie = movie
    this.sequence = sequence
    this.whenScreened = whenScreened
  }
  reserve(customer, audienceCount) {
    return new Reservation(
      customer,
      this,
      this.calculateFee(audienceCount),
      audienceCount,
    )
  }
  calculateFee(audienceCount) {
    return movie.calculateMovieFee(this).times(audienceCount)
  }
}
