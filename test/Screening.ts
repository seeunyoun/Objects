class Screening {
  private movie: string
  private sequence: number
  private whenScreened: number

  constructor(movie: string, seqence: number, whenScreened: number) {
    this.movie = movie
    this.sequence = seqence
    this.whenScreened = whenScreened
  }

  getStartTime() {
    return this.whenScreened
  }

  isSequence(seqence: number) {
    return this.sequence == seqence
  }

  getMovieFee() {
    return this.movie.getFee()
  }

  reserve(customer: string, audienceCount: number) {
    return new Reservation(
      customer,
      this,
      calculateFee(audienceCount),
      audienceCount,
    )
  }

  private calculateFee(audienceCount: number) {
    return movie.calculateMovieFee(this).times(audienceCount)
  }
}
