class QuantityControlCtrl {
  constructor() {

  }

  update() {
    if (this.cart) {
      this.onChange({ quantity: this.quantity, cart: this.cart });
    }
  }

  plusOne() {
    if (this.quantity < 1000) {
      this.quantity++;
      this.onChange({ quantity: this.quantity, cart: this.cart });
    }
  }

  minusOne() {
    if (this.quantity > 1) {
      this.quantity--;
      this.onChange({ quantity: this.quantity, cart: this.cart });
    }
  }
}

const QuantityControl = {
  bindings: {
    quantity: '=',
    cart: '=?',
    onChange: '&'
  },
  controller: QuantityControlCtrl,
  templateUrl: 'components/quantity-control/quantity-control.html'
};

export default QuantityControl;