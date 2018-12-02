export default class Cart {
  constructor(Storage, $rootScope) {
    'ngInject';

    this._storage = Storage;
    this._$rootScope = $rootScope;
    this.totalItems = this.get().length;
  }

  add(cart) {
    const allItems = this.get();
    const current = allItems.find(item => item.product.id === cart.product.id);

    if (current) {
      current.quantity += cart.quantity;
    } else {
      allItems.push(cart);
    }

    this._storage.setObject('cart', allItems);
    this._$rootScope.$broadcast('item-updated', allItems);
  }

  get() {
    return this._storage.getObject('cart', []);
  }

  update(cart) {
    const allItems = this.get();
    const current = allItems.find(item => item.product.id === cart.product.id);

    if (current) {
      current.quantity = cart.quantity;
      this._storage.setObject('cart', allItems);
      this._$rootScope.$broadcast('item-updated', allItems);
    }
  }

  remove(cart) {
    const allItems = this.get();
    const filteredItems = allItems.filter(item => item.product.id !== cart.product.id);

    if (filteredItems) {
      this._storage.setObject('cart', filteredItems);
      this._$rootScope.$broadcast('item-updated', filteredItems);
    }
  }
}