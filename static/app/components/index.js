import angular from 'angular';

let componentsModule = angular.module('app.components', []);

import QuantityControl from './quantity-control/quantity-control.component';
componentsModule.component('quantityControl', QuantityControl);

export default componentsModule;