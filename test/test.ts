class Screening {
  private movie: string;
  sequence: number;
  whenScreened: number;

  constructor(movie: string, seqence: number, whenScreened: number) {
    this.movie = movie;
    this.sequence = seqence;
    this.whenScreened = whenScreened;
  }

  getStartTime() {
    return this.whenScreened;
  }

  isSequence(seqence: number) {
    return this.sequence == seqence;
  }

  getMovieFee() {
    return this.movie.getFee();
  }
}
