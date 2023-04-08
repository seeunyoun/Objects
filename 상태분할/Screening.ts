export class Screening2 {
  private movie: string
  private sequence: number
  private whenScreened: number

  constructor(movie: string, sequence: number, whenScreened: number) {
    this.movie = movie
    this.sequence = sequence
    this.whenScreened = whenScreened
  }

  getMovie() {
    return this.movie
  }

  setMovie(movie: string) {
    this.movie = movie
  }

  getWhenScreened() {
    return this.whenScreened
  }

  setWhenScreened(whenScreened: number) {
    this.whenScreened = whenScreened
  }

  getSequence() {
    return this.sequence
  }

  setSequence(sequence: number) {
    this.sequence = sequence
  }
}
