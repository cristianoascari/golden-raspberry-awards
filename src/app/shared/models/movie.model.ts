export interface IMovie {
  id: number;
  producers: string[];
  studios: string[];
  title: string;
  winner: boolean;
  year: number;
}

export interface IProducerWinsInterval {
  followingWin: number;
  interval: number;
  previousWin: number;
  producer: string;
}

export interface IProducerWinsIntervalMaxMin {
  max: IProducerWinsInterval[];
  min: IProducerWinsInterval[];
}

export interface IStudioWithWinners {
  name: string;
  winCount: number;
}

export interface IYearMultipleWinners {
  year: number;
  winnerCount: number;
}