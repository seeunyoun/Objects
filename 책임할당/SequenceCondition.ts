class SequenceCondition {
  private sequence: number

  constructor(sequence: number) {
    this.sequence = sequence
  }

  isSatisfiedBy(screening: any) {
    return this.sequence == screening.getSequence()
  }
}
