class ProductCtrl {
  constructor(product, Cart) {
    'ngInject';

    this._cart = Cart;

    this.product = product;
    this.quantity = 1;
  }

  changeQuantity(newQuantity) {
    this.quantity = newQuantity;
  }

  addToCart() {
    if(this.quantity) {
      this._cart.add({
        product: this.product, 
        quantity: this.quantity
      });
    }
};
}


export default ProductCtrl;
