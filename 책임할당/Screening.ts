import { Movie3 } from './Movie'

export class Screening3 {
  private customer: string
  private audienceCount: number
  private movie: string
  private sequence: number
  private whenScreened: number

  constructor(
    customer: string,
    audienceCount: number,
    movie: string,
    sequence: number,
    whenScreened: number,
  ) {
    this.customer = customer
    this.audienceCount = audienceCount
    this.movie = movie
    this.sequence = sequence
    this.whenScreened = whenScreened
  }

  reserve(customer: string, audienceCount: number) {
    return new Reservation(
      customer,
      this,
      this.calculateFee(audienceCount),
      audienceCount,
    )
  }

  private calculateFee(audienceCount: number) {
    return new Movie3().calculateMovieFee(this).times(audienceCount)
  }

  getWhenScreened() {
    return this.whenScreened
  }

  getSequence() {
    return this.sequence
  }
}
