class AppHeaderCtrl {
  constructor(AppConstants, Cart, $scope) {
    'ngInject';

    this.appName = AppConstants.appName;
    this.totalItems = Cart.totalItems;
    this.collapse = false;

    // const that = this;
    $scope.$on('item-updated', this.updateCartTotal.bind(this));
  }

  updateCartTotal(event, allItems) {
    this.totalItems = allItems.length;
  }
}

let AppHeader = {
  controller: AppHeaderCtrl,
  templateUrl: 'layout/header.component.html'
};

export default AppHeader;