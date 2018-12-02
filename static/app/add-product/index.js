import angular from 'angular';

// Include our UI-Router config settings
import AddProductConfig from './add-product.config';

// Controllers
import AddProductCtrl from './add-product.controller';

// Create the module where our functionality can attach to
const addProductModule = angular.module('app.add', []);
addProductModule.config(AddProductConfig);
addProductModule.controller('AddProductCtrl', AddProductCtrl);

export default addProductModule;