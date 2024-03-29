import storage from './storage';

const cart = [];

function getTotalPrice() {
  return cart.map((item) => item.price * item.amount).reduce((a, b) => a + b, 0);
}

function init() {
  if (storage.getItem('cart')) {
    cart.length = 0;
    cart.push(...storage.getItem('cart'));
  }
}

export { getTotalPrice, init };

export default cart;
