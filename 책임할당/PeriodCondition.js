"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PeriodCondition {
    constructor(dayOfWeek, startTime, endTime) {
        this.dayOfWeek = dayOfWeek;
        this.startTime = startTime;
        this.endTime = endTime;
    }
    isSatisfiedBy(screening) {
        return (this.dayOfWeek(screening.getWhenScreened().getDayOfWeek()) &&
            this.startTime.compareTo(screeing.getWhenScreened().toLocalTime() <= 0) &&
            this.endTime.compareTo(screening.getWhenScreened().toLocalTime() >= 0));
    }
}
