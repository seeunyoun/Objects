import { Screening2 } from './Screening'
import { Customer2 } from './Customer'
import { Reservation2 } from './Reservation'
import { Movie2, movieType } from './Movie'
import { DiscountCondition2 } from './DiscountConditions'
import Money from '../책임분할/Money'

const discountConditionType = {
  SEQUENCE: 'SEQUENCE',
  PERIOD: 'PERIOD',
}

class ReservationAgencey {
  private movie: string
  private discountable: boolean
  private condition: string
  private sequence: number

  constructor(
    screening: Screening2,
    customer: Customer2,
    movie: Movie2,
    audienceCount: number,
    discountCondition: DiscountCondition2,
  ) {
    this.movie = screening.getMovie()
    this.discountable = false
    this.condition = movie.getDiscountConditions()
    this.sequence = discountCondition.getSequence()

    // JAVA 향상된 for문: 증감식 필요없이 파라미터에 List 넣으면 작동함.
    // 근데 TypeScript는 해당 기능이 없는 것 같음.
    // for (condition: movie.getDiscountConditions()) {
    //   if (condition.getType() === DiscountConditionType.PERIOD) {
    //     this.discountable = screening.getWhenScreened().getDayOfWeek()
    //   }
    // }

    let fee
    for (let i = 0; i < this.condition.length; i++) {
      if (this.condition === discountConditionType.PERIOD) {
        this.discountable = screening
          .getWhenScreened()
          .getDayOfWeek()
          .equals(
            this.condition.getDayOfWeek() &&
              this.condition
                .getStartTime()
                .compareTo(screening.getWhenScreened().toLocalTime() <= 0) &&
              this.condition
                .getEndTime()
                .compareTo(screening.getWhenScreened().toLocalTime() >= 0),
          )
      } else {
        this.discountable = this.sequence === screening.getSequence()
      }

      if (this.discountable) {
        break
      }
    }

    if (this.discountable) {
      let discountAmount = Money.ZERO
      switch (movie.getMovieType()) {
        case movieType.AMOUNT_DISCOUNT: {
          discountAmount = movie.getDiscountAmount()
          break
        }
        case movieType.PERCENT_DISCOUNT: {
          discountAmount = movie.getFee().times(movie.getDiscountPercent())
          break
        }
        case movieType.NONE_DISCOUNT: {
          discountAmount = Money.ZERO
          break
        }
      }

      fee = movie.getFee().minus(discountAmount)
    } else {
      fee = movie.getFee()
    }

    return new Reservation2(customer, screening, fee, audienceCount)
  }
}
