export interface IStat {
  id: string;
  numberOfTraderIdendified: number;
  maximumGainOfAllTraders: number;
  minimumGainOfAllTraders: number;
  meanGainOfAllTranders: number;
  mostGainingTraderId: number;
}

export class Stat {
  id: string;
  numberOfTraderIdendified: number;
  maximumGainOfAllTraders: number;
  minimumGainOfAllTraders: number;
  meanGainOfAllTranders: number;
  mostGainingTraderId: number;

  constructor(stat) {
    {
      this.id = stat.id;
      this.numberOfTraderIdendified = stat.numberOfTraderIdendified;
      this.maximumGainOfAllTraders = stat.maximumGainOfAllTraders;
      this.minimumGainOfAllTraders = stat.minimumGainOfAllTraders;
      this.meanGainOfAllTranders = stat.meanGainOfAllTranders;
      this.mostGainingTraderId = stat.mostGainingTraderId;
    }
  }
}
