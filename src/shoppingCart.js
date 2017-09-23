function ShoppingCart() {
    this.rules = [
        { level: 'VIP', priceGate: 500, qtyGate: 0, rate: 0.8, isDefault: false },
        { level: 'Normal', priceGate: 1000, qtyGate: 3, rate: 0.85, isDefault: false },
        { rate: 1, isDefault: true }
    ]
}

ShoppingCart.prototype.Calculate = function (level, price, qty) {
    var totalPrice = price * qty;
    var matchedRule = this.rules.filter((rule) => this.IsMatchRule(rule, level, totalPrice, qty));

    return totalPrice * matchedRule[0].rate;
}

ShoppingCart.prototype.IsMatchRule = function (rule, level, totalPrice, qty) {
    return (level === rule.level &&
        totalPrice > rule.priceGate &&
        qty > rule.qtyGate) || rule.isDefault;
}

module.exports = ShoppingCart;

