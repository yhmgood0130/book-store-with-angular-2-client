import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AppConst } from '../constants/app-const';

@Injectable()
export class CartService {

  private serverPath:string = AppConst.serverPath;

  constructor(private http: Http) { }

  addItem(id:number, qty: number) {
    let url = this.serverPath + "/cart/add";
    let cartItemInfo = {
      "jerseyId" : id,
      "qty" : qty
    }

    let tokenHeader = new Headers({
      'Content-Type' : 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, cartItemInfo, { headers: tokenHeader})
  }

  getCartItemList() {
    let url = this.serverPath + "/cart/getCartItemList";

    let tokenHeader = new Headers({
      'Content-Type': 'application/json',
      'x-auth-token': localStorage.getItem('xAuthToken')
    })

    return this.http.get(url, { headers:tokenHeader })
  }

  getShoppingCart() {
    let url = this.serverPath + "/cart/getShoppingCart";

    let tokenHeader = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token': localStorage.getItem('xAuthToken')
    })

    return this.http.get(url, { headers: tokenHeader });
  }

  updateCartItem(cartItemId: number, qty: number){
    let url = this.serverPath + "/cart/updateCartItem";

    let cartItemInfo = {
      "cartItemId": cartItemId,
      "qty": qty
    }

    let tokenHeader = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token': localStorage.getItem('xAuthToken')
    })

    return this.http.post(url, cartItemInfo ,{ headers: tokenHeader })
  }

  removeCartItem(id:number) {
    let url = this.serverPath + "/cart/removeItem";

    let tokenHeader = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token': localStorage.getItem('xAuthToken')
    })

    return this.http.post(url, id ,{ headers: tokenHeader })
  }
}
