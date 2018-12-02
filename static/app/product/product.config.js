function ProductConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('app.product', {
      url: '/products/:id',
      controller: 'ProductCtrl',
      controllerAs: '$ctrl',
      templateUrl: 'product/product.html',
      title: 'Product',
      resolve: {
        product: function (Products, $state, $stateParams) {
          return Products
            .get($stateParams.id)
            .then(product => product, () => $state.go('app.home'));
        }
      }
    });

};

export default ProductConfig;