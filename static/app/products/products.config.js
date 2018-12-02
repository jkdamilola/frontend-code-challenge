function ProductsConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.products', {
    url: '/products',
    controller: 'ProductsCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'products/products.html',
    title: 'Browse Products'
  });

};

export default ProductsConfig;