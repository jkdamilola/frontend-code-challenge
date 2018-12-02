export default class Storage {
  constructor($window) {
    'ngInject';

    this._$window = $window;
  }

  set(key, value) {
    this._$window.localStorage[key] = value;
  }

  get(key, defaultValue) {
    return this._$window.localStorage[key] || defaultValue || false;
  }

  setObject(key, value) {
    this._$window.localStorage[key] = JSON.stringify(value);
  }

  getObject(key, defaultValue) {
    if (typeof this._$window.localStorage[key] !== 'undefined') {
      return JSON.parse(this._$window.localStorage[key]);
    } else {
      return defaultValue || false;
    }
  }

  remove(key) {
    this._$window.localStorage.removeItem(key);
  }

  clear() {
    this._$window.localStorage.clear();
  }
}