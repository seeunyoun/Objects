import { DiscontCondition3 } from './DiscountCondition'

class SequenceCondition implements DiscontCondition3 {
  private sequence: number

  constructor(sequence: number) {
    this.sequence = sequence
  }

  isSatisfiedBy(screening: any) {
    return this.sequence == screening.getSequence()
  }
}
