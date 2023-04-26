"use strict";
class SequenceCondition {
    constructor(sequence) {
        this.sequence = sequence;
    }
    isSatisfiedBy(screening) {
        return this.sequence == screening.getSequence();
    }
}
