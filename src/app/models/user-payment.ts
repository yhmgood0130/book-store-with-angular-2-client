import { UserBilling } from './user-billing';

export class UserPayment {
  public id: number;
  public type: string;
  public cardNumber: string;
  public cardType: string;
  public expiredMonth: string;
  public expiredYear: string;
  public cvc: number;
  public holderName: string;
  public defaultPayment: boolean;
  public userBilling: UserBilling;
}
