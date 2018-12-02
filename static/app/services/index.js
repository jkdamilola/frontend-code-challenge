import angular from 'angular';

import ProductsService from './products.service';
import StorageService from './storage.service';
import CartService from './cart.service';

// Create the module where our functionality can attach to
let servicesModule = angular.module('app.services', []);
servicesModule.service('Products', ProductsService);
servicesModule.service('Storage', StorageService);
servicesModule.service('Cart', CartService);
