import { discountConditions } from './DiscountConditions'

interface movieType {
  AMOUNT_DISCOUNT: 'AMOUNT_DISCOUNT'
  PERCENT_DISCOUNT: 'PERCENT_DISCOUNT'
  NONE_DISCOUNT: 'NONE_DISCOUNT'
}

class Movie2 {
  private title: string
  private runningTime: number
  private fee: number
  private discountConditions: discountConditions

  private movieType: movieType
  private discountAmount: number
  private discountPercent: number

  constructor(
    title: string,
    runningTime: number,
    fee: number,
    discountConditions: discountConditions,
    movieType: movieType,
    discountAmount: number,
    discountPercent: number,
  ) {
    this.title = title
    this.runningTime = runningTime
    this.fee = fee
    this.discountConditions = discountConditions
    this.movieType = movieType
    this.discountAmount = discountAmount
    this.discountPercent = discountPercent
  }

  getMovieType() {
    return this.movieType
  }

  setMovieType(movieType: movieType) {
    this.movieType = movieType
  }

  getFee() {
    return this.fee
  }

  setFee(fee: number) {
    this.fee = fee
  }

  getDiscountConditions() {
    return Collections.unmodifiableList(this.discountConditions)
  }

  setDiscountConditions(discountConditions: discountConditions) {
    this.discountConditions = discountConditions
  }

  getDiscountAmount() {
    return this.discountAmount
  }

  setDiscountAmount(discountAmount: number) {
    this.discountAmount = discountAmount
  }

  getDiscountPercent() {
    return this.discountPercent
  }

  setDiscountPercent(discountPercent: number) {
    this.discountPercent = discountPercent
  }
}
