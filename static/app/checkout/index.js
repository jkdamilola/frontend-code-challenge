import angular from 'angular';

// Include our UI-Router config settings
import CheckoutConfig from './checkout.config';

// Controllers
import CheckoutCtrl from './checkout.controller';

// Create the module where our functionality can attach to
const checkoutModule = angular.module('app.checkout', []);
checkoutModule.config(CheckoutConfig);
checkoutModule.controller('CheckoutCtrl', CheckoutCtrl);

export default checkoutModule;