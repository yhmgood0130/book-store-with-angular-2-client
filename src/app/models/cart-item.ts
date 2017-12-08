import { Jersey } from './jersey';
import { ShoppingCart } from './shopping-cart';
import { Order } from './order';

export class CartItem {
  public id: number;
  public subtotal: number;
  public jersey: Jersey;
  public shoppingCart: ShoppingCart;
  public toUpdate:boolean;
}
