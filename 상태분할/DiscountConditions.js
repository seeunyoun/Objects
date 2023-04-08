"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountCondition2 = void 0;
class DiscountCondition2 {
    constructor(type, sequence, dayOfWeek, startTime, endTime) {
        this.type = type;
        this.sequence = sequence;
        this.dayOfWeek = dayOfWeek;
        this.startTime = startTime;
        this.endTime = endTime;
    }
    getType() {
        return this.type;
    }
    setType(type) {
        this.type = type;
    }
    getDayOfWeek() {
        return this.dayOfWeek;
    }
    setDayOfWeek(dayOfWeek) {
        this.dayOfWeek = dayOfWeek;
    }
    getStartTime() {
        return this.startTime;
    }
    setStartTime(startTime) {
        this.startTime = startTime;
    }
    getEndTime() {
        return this.endTime;
    }
    setEndTime(endTime) {
        this.endTime = endTime;
    }
    getSequence() {
        return this.sequence;
    }
    setSequence(sequence) {
        this.sequence = sequence;
    }
}
exports.DiscountCondition2 = DiscountCondition2;
