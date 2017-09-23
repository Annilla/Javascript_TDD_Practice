function ShoppingCart() {
    this.rules = [
        { level: 'VIP', priceGate: 500, qtyGate: 0, rate: 0.8 },
        { level: 'Normal', priceGate: 1000, qtyGate: 3, rate: 0.85 }
    ]
}

ShoppingCart.prototype.Calculate = function (level, price, qty) {
    var totalPrice = price * qty;
    var rate = this.GetRate(level, totalPrice, qty);

    return totalPrice * rate;
}

ShoppingCart.prototype.GetRate = function (level, totalPrice, qty) {
    var rate = 1;

    var matchedRule = this.rules.filter(
        (rule) => this.IsMatchRule(rule, level, totalPrice, qty));
    if (matchedRule.length > 0) {
        return matchedRule[0].rate;
    }

    return rate;
}

ShoppingCart.prototype.IsMatchRule = function(rule, level, totalPrice, qty) {
    return level === rule.level &&
        totalPrice > rule.priceGate &&
        qty > rule.qtyGate;
}

module.exports = ShoppingCart;

