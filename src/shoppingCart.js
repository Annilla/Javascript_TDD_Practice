function ShoppingCart() {
}

ShoppingCart.prototype.Calculate = function (level, price, qty) {
   var totalPrice = price * qty;
   if(level === 'VIP' && totalPrice > 500){
       return totalPrice * 0.8;
   }
   return totalPrice; 
}

module.exports = ShoppingCart;