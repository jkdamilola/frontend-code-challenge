class ProductsCtrl {
  constructor(AppConstants, Cart, Products) {
    'ngInject';

    this.appName = AppConstants.appName;
    this._cart = Cart;

    Products
      .getAll()
      .then(products => {
        this.productsLoaded = true;
        this.products = products;
      });
  }

  addToCart(product) {
    this._cart.add({
      product,
      quantity: 1
    });
  }
}

export default ProductsCtrl;