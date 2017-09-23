function ShoppingCart() {
}

ShoppingCart.prototype.Calculate = function (level, price, qty) {
    var totalPrice = price * qty;
    var rate = this.GetRate(level, totalPrice, qty);

    return totalPrice * rate;
}

ShoppingCart.prototype.GetRate = function (level, totalPrice, qty) {
    var rate = 1;

    if (level === 'VIP' && totalPrice > 500 && qty > 0) {
        rate = 0.8;
    }
    else if (level === 'Normal' && totalPrice > 1000 && qty > 3) {
        rate = 0.85
    }

    return rate;
}

module.exports = ShoppingCart;