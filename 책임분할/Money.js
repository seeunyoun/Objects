"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Money {
    constructor(BigDecimal, ZERO) {
        this.BigDecimal = BigDecimal;
        this.ZERO = ZERO;
    }
    static wons(amount) {
        return new Money(BigDecimal.valueOf(amount));
    }
    Money(amount) {
        this.amount = amount;
    }
    plus(amount) {
        return new Money(this.amount.add(amount.amount));
    }
    minus(amount) {
        return new Money(this.amount.subtract(amount.amount));
    }
    times(percent) {
        return new Money(this.amount.multiply(BigDecimal.valueOf(percent)));
    }
    isLessThan(other) {
        return amount.compareTo(other.amount) < 0;
    }
    isGreaterThanOrEqual(other) {
        return amount.compareTo(other.amount) >= 0;
    }
}
exports.default = Money;
Money.ZERO = Money.wons(0);
