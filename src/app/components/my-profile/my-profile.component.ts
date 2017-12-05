import { Component, OnInit } from '@angular/core';
import { AppConst } from '../../constants/app-const';
import { UserService } from '../../services/user.service';
import { LoginService } from '../../services/login.service';
import { PaymentService } from '../../services/payment.service';
import { ShippingService } from '../../services/shipping.service';
import { User } from '../../models/user';
import { UserPayment } from '../../models/user-payment';
import { UserBilling } from '../../models/user-billing';
import { UserShipping } from '../../models/user-shipping';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  private serverPath = AppConst.serverPath;
  private dataFetched = false;
  private loginError:boolean;
  private loggedIn:boolean;
  private credential = {'username':'', 'password':''};

  private user: User = new User();
  private updateSuccess: boolean;
  private newPassword: string;
  private currentPassword: string;
  private incorrectPassword: boolean;

  private selectedBillingTab: number = 0;
  private selectedProfileTab: number = 0;
  private selectedShippingTab: number = 0;

  private userPayment: UserPayment = new UserPayment();
  private userBilling: UserBilling = new UserBilling();
  private userPaymentList: UserPayment[] = [];
  private defaultPaymentSet: boolean;
  private defaultUserPaymentId: number;
  private stateList: string[] = [];

  private userShipping: UserShipping = new UserShipping();
  private userShippingList: UserShipping[] = [];

  private defaultUserShippingId: number;
  private defaultShippingSet: boolean;

  constructor(private loginService:LoginService, private userService:UserService, private paymentService:PaymentService, private shippingService:ShippingService, private router:Router) { }

  selectedBillingChange(val: number) {
    this.selectedBillingTab = val;
  }

  selectedShippingChange(val: number) {
    this.selectedShippingTab = val;
  }

  onUpdateUserInfo() {
    this.userService.updateUserInfo(this.user, this.newPassword, this.currentPassword).subscribe(
      res => {
        console.log(res.text());
        this.updateSuccess = true;
      }, error => {
        console.log(error.text());
        let errorMessage = error.text();
        if(errorMessage === "Incorrect current password!") this.incorrectPassword = true;
      }
    )
  }

  onNewPayment() {
    this.paymentService.newPayment(this.userPayment).subscribe(
      res =>{
        this.getCurrentUser();
        this.selectedBillingTab = 0;
        this.userPayment = new UserPayment();
      }, error =>{
        console.log(error.text());
      }
    )
  }

  onNewShipping() {
    this.shippingService.newShipping(this.userShipping).subscribe(
      res => {
        this.getCurrentUser();
        this.selectedShippingTab = 0;
        this.userShipping = new UserShipping();
      }, error => {
        console.log(error.text());
      }
    )
  }

  onUpdateShipping(shipping: UserShipping) {
    this.userShipping = shipping;
    this.selectedShippingTab = 1;
  }

  onRemoveShipping(id: number) {
    this.shippingService.removeShipping(id).subscribe(
      res => {
        this.getCurrentUser();
      }, error => {
        console.log(error.text());
      }
    )
  }

  setDefaultShipping() {
    this.defaultShippingSet = false;
    this.shippingService.setDefaultShipping(this.defaultUserShippingId).subscribe(
      res => {
        this.getCurrentUser();
        this.defaultShippingSet = true;
      }, error => {
        console.log(error.text());
      }
    )
  }

  getCurrentUser() {
    this.userService.getCurrentUser().subscribe(
      res => {
        this.user = res.json();
        this.userPaymentList = this.user.userPaymentList;
        this.userShippingList = this.user.userShippingList;

        for(let index in this.userPaymentList){
          if(this.userPaymentList[index].defaultPayment){
            this.defaultUserPaymentId = this.userPaymentList[index].id;
            break;
          }
        }

        for(let index in this.userShippingList){
          if(this.userShippingList[index].userShippingDefault){
            this.defaultUserShippingId = this.userShippingList[index].id;
            break;
          }
        }

        this.dataFetched = true;
      }, error => {
        console.log(error);
      }
    )
  }

  onUpdatePayment(payment: UserPayment) {
    this.userPayment = payment;
    this.userBilling = payment.userBilling;
    this.selectedBillingTab = 1;
  }

  onRemovePayment(id:number) {
    this.paymentService.removeUserPayment(id).subscribe(
      res => {
        this.getCurrentUser();
      }, error => {
        console.log(error.text());
      }
    )
  }

  setDefaultPayment() {
    this.defaultPaymentSet = false;
    this.paymentService.setDefaultPayment(this.defaultUserPaymentId).subscribe(
      res => {
        this.getCurrentUser();
        this.defaultPaymentSet = true;
      }, error => {
        console.log(error.text());
      }
    )
  }

  ngOnInit() {
    this.loginService.checkSession().subscribe(
      res => {
        this.loggedIn = true;
      }, error => {
        this.loggedIn = false;
        console.log("inactive session");
        this.router.navigate(["/myAccount"]);
      }
    );

    this.getCurrentUser();

    for(let s in AppConst.usStates){
      this.stateList.push(s);
    }

    this.userBilling.userBillingState="";
    this.userPayment.type="";
    this.userPayment.expiredMonth="";
    this.userPayment.expiredYear="";
    this.userPayment.userBilling = this.userBilling;
    this.defaultPaymentSet = false;

    this.userShipping.userShippingState="";
    this.defaultShippingSet = false;
  }

}
