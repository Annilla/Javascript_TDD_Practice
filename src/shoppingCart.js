function ShoppingCart() {
}

ShoppingCart.prototype.Calculate = function (level, price, qty) {
    var totalPrice = price * qty;
    var rate = 1;

    if (level === 'VIP' && totalPrice > 500) {
        rate = 0.8;
    }
    else if (level === 'Normal' && totalPrice > 1000 && qty > 3) {
        rate = 0.85
    }

    return totalPrice * rate;
}

module.exports = ShoppingCart;