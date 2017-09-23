function ShoppingCart() {
}

ShoppingCart.prototype.Calculate = function (level, price, qty) {
   return price * qty; 
}

module.exports = ShoppingCart;