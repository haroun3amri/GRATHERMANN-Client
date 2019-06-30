export interface ICollectedInfo {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email1: string;
  email2: string;
  turnover: number;
  numberOfWorkedDaysPerWeeks: number;
  numberOfFreeDayPerYear: number;
  traderId: string;
}

export class CollectedInfo {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email1: string;
  email2: string;
  turnover: number;
  numberOfWorkedDaysPerWeeks: number;
  numberOfFreeDayPerYear: number;
  traderId: string;

  constructor(collectedInfo) {
    {
      this.id = collectedInfo.id;
      this.firstName = collectedInfo.firstName;
      this.lastName = collectedInfo.lastName;
      this.phoneNumber = collectedInfo.phoneNumber;
      this.email1 = collectedInfo.email1;
      this.email2 = collectedInfo.email2;
      this.turnover = collectedInfo.turnover;
      this.numberOfWorkedDaysPerWeeks = collectedInfo.numberOfWorkedDaysPerWeeks;
      this.numberOfFreeDayPerYear = collectedInfo.numberOfFreeDayPerYear;
      this.traderId = collectedInfo.traderId;
    }
  }
}
