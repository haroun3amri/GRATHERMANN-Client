export interface ITrader {
  id: number;
  imageURI: string;
  firstName: string;
  lastName: string;
  dailyGain: string;
}

export class Trader {
  id: number;
  imageURI: string;
  firstName: string;
  lastName: string;
  dailyGain: string;

  constructor(trader) {
    {
      this.id = trader.id;
      this.imageURI = trader.imageURI;
      this.firstName = trader.firstName;
      this.lastName = trader.lastName;
      this.dailyGain = trader.dailyGain;
    }
  }
}
