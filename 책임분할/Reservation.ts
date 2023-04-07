class Reservation {
  private customer: string
  private screening: string
  private fee: number
  private audienceCount: number

  constructor(
    customer: string,
    screening: string,
    fee: number,
    audienceCount: number,
  ) {
    this.customer = customer
    this.screening = screening
    this.fee = fee
    this.audienceCount = audienceCount
  }
}
