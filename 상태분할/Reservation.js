'use strict'
class Reservation2 {
  constructor(customer, screening, fee, audienceCount) {
    this.customer = customer
    this.screening = screening
    this.fee = fee
    this.audienceCount = audienceCount
  }
  getCustomer() {
    return this.customer
  }
  setCustomer(customer) {
    this.customer = customer
  }
  getScreening() {
    return this.screening
  }
  setScreening(screening) {
    this.screening = screening
  }
  getFee() {
    return this.fee
  }
  setFee(fee) {
    this.fee = fee
  }
  getAudienceCount() {
    return this.audienceCount
  }
  setAudienceCount(audienceCount) {
    this.audienceCount = audienceCount
  }
}
