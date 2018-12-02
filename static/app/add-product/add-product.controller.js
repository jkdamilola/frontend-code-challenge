class ProductsCtrl {
  constructor(AppConstants, Products, $state) {
    'ngInject';

    this.appName = AppConstants.appName;
    this._Products = Products;
    this._$state = $state;
  }

  addProduct() {
    this.isSubmitting = true;

    this
      ._Products
      .add(this.formData)
      .then(() => {
        this._$state.go('app.products');
      },
      err => {
        this.isSubmitting = false;
        this.error = err.data.error;
      });
  }
}

export default ProductsCtrl;