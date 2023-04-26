"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SequenceCondition {
    constructor(sequence) {
        this.sequence = sequence;
    }
    isSatisfiedBy(screening) {
        return this.sequence == screening.getSequence();
    }
}
