import { BillingAddress } from './billing-address';

export class Payment {
  public id: number;
  public type: string;
  public cardNumber: string;
  public cardType: string;
  public expiredMonth: string;
  public expiredYear: string;
  public cvc: number;
  public holderName: string;
  public defaultPayment: boolean;
  public billingAddress: BillingAddress;
}
