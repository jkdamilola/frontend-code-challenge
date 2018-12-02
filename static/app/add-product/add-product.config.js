function AddProductConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('app.add', {
      url: '/products/add',
      controller: 'AddProductCtrl',
      controllerAs: '$ctrl',
      templateUrl: 'add-product/add-product.html',
      title: 'Add Product'
    });

};

export default AddProductConfig;