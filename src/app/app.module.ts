import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DataTableModule } from 'angular2-datatable';
import { DataFilterPipe } from './components/jersey-list/data-filter.pipe';

import { LoginService } from './services/login.service';
import { UserService } from './services/user.service';
import { PaymentService } from './services/payment.service';
import { ShippingService } from './services/shipping.service';
import { JerseyService } from './services/jersey.service';
import { CartService } from './services/cart.service';
import { OrderService } from './services/order.service';
import { CheckoutService } from './services/checkout.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { JerseyListComponent } from './components/jersey-list/jersey-list.component';
import { JerseyDetailComponent } from './components/jersey-detail/jersey-detail.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { OrderComponent } from './components/order/order.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    MyAccountComponent,
    MyProfileComponent,
    JerseyListComponent,
    DataFilterPipe,
    JerseyDetailComponent,
    ShoppingCartComponent,
    OrderComponent,
    OrderSummaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    DataTableModule
  ],
  providers: [
    LoginService,
    UserService,
    PaymentService,
    ShippingService,
    JerseyService,
    CartService,
    OrderService,
    CheckoutService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
