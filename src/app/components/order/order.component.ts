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

  constructor() { }

  ngOnInit() {
  }

}
