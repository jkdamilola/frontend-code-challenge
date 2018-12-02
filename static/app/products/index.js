import angular from 'angular';

// Include our UI-Router config settings
import ProductsConfig from './products.config';

// Controllers
import ProductsCtrl from './products.controller';

// Create the module where our functionality can attach to
const productsModule = angular.module('app.products', []);
productsModule.config(ProductsConfig);
productsModule.controller('ProductsCtrl', ProductsCtrl);

export default productsModule;