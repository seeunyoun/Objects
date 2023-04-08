export default class Money {
  private BigDecimal: number
  static ZERO = Money.wons(0)

  constructor(BigDecimal: number, ZERO: number) {
    this.BigDecimal = BigDecimal
    this.ZERO = ZERO
  }

  static wons(amount: number) {
    return new Money(BigDecimal.valueOf(amount))
  }

  Money(amount: number) {
    this.amount = amount
  }

  plus(amount: number) {
    return new Money(this.amount.add(amount.amount))
  }

  minus(amount: number) {
    return new Money(this.amount.subtract(amount.amount))
  }

  times(percent: number) {
    return new Money(this.amount.multiply(BigDecimal.valueOf(percent)))
  }

  isLessThan(other: number) {
    return amount.compareTo(other.amount) < 0
  }

  isGreaterThanOrEqual(other: number) {
    return amount.compareTo(other.amount) >= 0
  }
}
