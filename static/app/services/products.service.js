export default class Products {
  constructor(AppConstants, $http) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;
  }

  get(id) {
    return this._$http({
      url: `${this._AppConstants.api}/items/${id}`,
      method: 'GET',
    }).then(res => res.data);
  }

  getAll() {
    return this._$http({
      url: `${this._AppConstants.api}/items`,
      method: 'GET',
    }).then(res => res.data);
  }

  add(product) {
    return this._$http({
      url: `${this._AppConstants.api}/items`,
      method: 'POST',
      data: product
    }).then(res => res.data);
  }
}