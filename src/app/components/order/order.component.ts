import { Component, OnInit } from '@angular/core';
import { AppConst } from '../../constants/app-const';
import { Router, NavigationExtras } from '@angular/router';
import { Jersey } from '../../models/jersey';
import { CartService } from '../../services/cart.service';
import { ShippingService} from '../../services/shipping.service';
import { PaymentService } from '../../services/payment.service';
import { CheckoutService } from '../../services/checkout.service';
import { CartItem } from '../../models/cart-item';
import { ShoppingCart } from '../../models/shopping-cart';
import { ShoppingAddress } from '../../models/shopping-address';
import { BillingAddress } from '../../models/billing-address';
import { UserPayment } from '../../models/user-payment';
import { UserShipping } from '../../models/user-shipping';
import { Payment } from '../../models/payment';
import { Order } from '../../models/order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  private serverPath:string = AppConst.serverPath;
  private selectedJersey: Jersey;
  private cartItemList: CartItem[] = [];
  private cartItemNumber: number;
  private shoppingCart: ShoppingCart = new ShoppingCart();
  private cartItemUpdated: boolean;
  private shippingAddress: ShippingAddress = new ShippingAddress();
  private billingAddress: BillingAddress = new BillingAddress();
  private userPayment: UserPayment = new UserPayment();
  private userShipping: UserShipping = new UserShipping();
  private userBilling: UserBilling = new UserBilling();

  private userShippingList: UserShipping[] = [];
  private userPaymentList: UserPayment[] = [];
  private payment: Payment = new Payment();
  private selectedTab: number;
  private emptyShippingList: boolean = true;
  private emptyPaymentList: boolean = true;
  private stateList: string[] = [];
  private order:Order = new Order();

  constructor(private router:Router, private cartService: CartService, private shippingService: ShippingService, private paymentService: PaymentService, private checkoutService: CheckoutService) { }

  onSelect(jersey: Jersey) {
    this.selectedJersey = jersey;
    this.router.navigate(['/jerseyDetail', this.selectedJersey.id]);
  }

  selectedChange(val: number) {
    this.selectedTab = val;
  }

  goToPayment() {
    this.selectedTab = 1;
  }

  goToReview() {
    this.selectedTab = 2;
  }

  getCartItemList() {
    this.cartService.getCartItemList().subscribe(
      res => {
        this.cartItemList = res.json();
        this.cartItemNumber = this.cartItemList.length;
      }, error => {
          console.log(error.text());
      }
    );
  }

  setShippingAddress(userShipping: UserShipping) {
    this.shippingAddress.shippingAddressName = userShipping.userShippingName;
    this.shippingAddress.shippingAddressStreet1 = userShipping.userShippingStreet1;
    this.shippingAddress.shippingAddressStreet2 = userShipping.userShippingStreet2;
    this.shippingAddress.shippingAddressCity = userShipping.userShippingCity;
    this.shippingAddress.shippingAddressState = userShipping.userShippingState;
    this.shippingAddress.shippingAddressCountry = userShipping.userShippingCountry;
    this.shippingAddress.shippingAddressZipcode = userShipping.userShippingZipcode;
  }

  ngOnInit() {
  }

}
