import angular from 'angular';

// Include our UI-Router config settings
import ProductConfig from './product.config';

// Controllers
import ProductCtrl from './product.controller';

// Create the module where our functionality can attach to
const productModule = angular.module('app.product', []);
productModule.config(ProductConfig);
productModule.controller('ProductCtrl', ProductCtrl);

export default productModule;