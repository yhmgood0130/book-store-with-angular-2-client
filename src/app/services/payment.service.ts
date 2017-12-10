import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AppConst } from '../constants/app-const';
import { UserPayment } from '../models/user-payment';
import { UserBilling } from '../models/user-billing';

@Injectable()
export class PaymentService {
  private serverPath : string = AppConst.serverPath;
  constructor(private http: Http) { }

  newPayment(payment: UserPayment) {
    let url = this.serverPath + "/payment/add";

    let tokenHeader = new Headers ({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, JSON.stringify(payment), {headers: tokenHeader});
  }

  getUserPaymentList() {
    let url = this.serverPath + "/payment/getUserPaymentList";

    let tokenHeader = new Headers ({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.get(url, {headers: tokenHeader});
  }

  removeUserPayment(id: number) {
    let url = this.serverPath + "/payment/remove";

    let tokenHeader = new Headers ({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, id, {headers: tokenHeader});
  }

  setDefaultPayment(id:number) {
    let url = this.serverPath + "/payment/setDefault";

    let tokenHeader = new Headers ({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, id, {headers: tokenHeader});
  }

}
