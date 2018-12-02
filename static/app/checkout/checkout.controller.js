class CheckoutCtrl {
  constructor(Cart) {
    'ngInject';

    this._cart = Cart;

    this.loadCart()
  }

  loadCart() {
    this.cartList = this._cart.get();

    let total = 0;
    for(let cart of this.cartList) {
      total += cart.product.price * cart.quantity;
    }
    this.totalPrice = total;
  }

  updateCart(quantity, cart) {
    cart.quantity = quantity;
    this._cart.update(cart);
    this.loadCart();
  }

  removeFromCart(cart) {
    this._cart.remove(cart);
    this.loadCart();
  }
}

export default CheckoutCtrl;