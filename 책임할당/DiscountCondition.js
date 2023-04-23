"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Screening_1 = require("./Screening");
var discountConditionType;
(function (discountConditionType) {
    discountConditionType[discountConditionType["SEQUENCE"] = 0] = "SEQUENCE";
    discountConditionType[discountConditionType["PERIOD"] = 1] = "PERIOD";
})(discountConditionType || (discountConditionType = {}));
class DiscountConditions {
    constructor(type, sequence, dayOfWeek, startTime, endTime) {
        this.type = type;
        this.sequence = sequence;
        this.dayOfWeek = dayOfWeek;
        this.startTime = startTime;
        this.endTime = endTime;
    }
    isSatisfiedBy(screening) {
        if (this.type === discountConditionType.PERIOD) {
            return this.isSatifiedByPeriod(screening);
        }
        return this.isSatisfiedBySequence(screening);
    }
    isSatisfiedByPeriod(screening) {
        return (this.dayOfWeek.equals(screening.getWhenScreened().getDayOfWeek()) &&
            this.startTime.compareTo(screening.getWhenScreened().toLocalTime()) <=
                0 &&
            this.endTime.isAfter(screening.getWhenScreened().toLocalTime()) >= 0);
    }
    isSatisfiedBySequence() {
        return this.sequence === new Screening_1.Screening3().getSequence();
    }
}
