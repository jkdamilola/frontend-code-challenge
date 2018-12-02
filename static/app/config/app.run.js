function AppRun(AppConstants, $rootScope, $transitions) {
  'ngInject';

  // change page title based on state
  $transitions.onSuccess({}, (transition) => {
    $rootScope.setPageTitle(transition.to().title);
  });

  // Helper method for setting the page's title
  $rootScope.setPageTitle = title => {
    $rootScope.pageTitle = '';
    if (title) {
      $rootScope.pageTitle += `${title} - `;
    }
    $rootScope.pageTitle += AppConstants.appName;
  };

}

export default AppRun;