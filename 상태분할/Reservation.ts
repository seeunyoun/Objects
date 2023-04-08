export class Reservation2 {
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

  getCustomer() {
    return this.customer
  }

  setCustomer(customer: string) {
    this.customer = customer
  }

  getScreening() {
    return this.screening
  }

  setScreening(screening: string) {
    this.screening = screening
  }

  getFee() {
    return this.fee
  }

  setFee(fee: number) {
    this.fee = fee
  }

  getAudienceCount() {
    return this.audienceCount
  }

  setAudienceCount(audienceCount: number) {
    this.audienceCount = audienceCount
  }
}
