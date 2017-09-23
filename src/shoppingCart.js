function ShoppingCart() {
}

ShoppingCart.prototype.Calculate = function (level, price, qty) {
    var totalPrice = price * qty;
    if (level === 'VIP' && totalPrice > 500) {
        return totalPrice * 0.8;
    }
    else if (level === 'Normal' && totalPrice > 1000) {
        return totalPrice * 0.85;
    }
    return totalPrice;
}

module.exports = ShoppingCart;