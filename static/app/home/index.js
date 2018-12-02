import angular from 'angular';

// Include our UI-Router config settings
import HomeConfig from './home.config';

// Controllers
import HomeCtrl from './home.controller';

// Create the module where our functionality can attach to
const homeModule = angular.module('app.home', []);
homeModule.config(HomeConfig);
homeModule.controller('HomeCtrl', HomeCtrl);

export default homeModule;