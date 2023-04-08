import { discountConditionType } from './DiscountConditions'

export interface movieType {
  AMOUNT_DISCOUNT: string
  PERCENT_DISCOUNT: string
  NONE_DISCOUNT: string
}

export const movieType: movieType = {
  AMOUNT_DISCOUNT: 'AMOUNT_DISCOUNT',
  PERCENT_DISCOUNT: 'PERCENT_DISCOUNT',
  NONE_DISCOUNT: 'NONE_DISCOUNT',
}

export class Movie2 {
  private title: string
  private runningTime: number
  private fee: number
  private discountConditions: string[]

  private movieType: movieType
  private discountAmount: number
  private discountPercent: number

  constructor(
    title: string,
    runningTime: number,
    fee: number,
    discountConditions: string[],
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
    // 뭔진 모르겠지만 list가 리턴.
    return Collections.unmodifiableList(this.discountConditions) || []
  }

  setDiscountConditions(discountConditions: string[]) {
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
