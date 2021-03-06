var mocha = require('mocha');
var chai = require('chai');
chai.should();

var ShoppingCart = require('../src/shoppingCart');

describe('ShoppingCart', () => {
    describe('#Calculate(level, price, qty)', () => {
       it('VIP 會員, 150 元商品 3 件, 那折扣後金額 450', () => {
          // Arrange
          var level = 'VIP';
          var price = 150;
          var qty = 3;
          var expected = 450;
          var actual = 0;
          var shoppingCart = new ShoppingCart();
          
          // Act
          actual = shoppingCart.Calculate(level, price, qty);
          
          // Assert
          actual.should.equal(expected); 
       }); 

       it('VIP 會員, 300 元商品 2 件, 那折扣後金額 480', () => {
          // Arrange
          var level = 'VIP';
          var price = 300;
          var qty = 2;
          var expected = 480;
          var actual = 0;
          var shoppingCart = new ShoppingCart();
          
          // Act
          actual = shoppingCart.Calculate(level, price, qty);
          
          // Assert
          actual.should.equal(expected); 
       }); 

       it('Normal 會員, 400 元商品 2 件, 那折扣後金額 800', () => {
          // Arrange
          var level = 'Normal';
          var price = 400;
          var qty = 2;
          var expected = 800;
          var actual = 0;
          var shoppingCart = new ShoppingCart();
          
          // Act
          actual = shoppingCart.Calculate(level, price, qty);
          
          // Assert
          actual.should.equal(expected); 
       }); 

       it('Normal 會員, 300 元商品 4 件, 那折扣後金額 1020', () => {
          // Arrange
          var level = 'Normal';
          var price = 300;
          var qty = 4;
          var expected = 1020;
          var actual = 0;
          var shoppingCart = new ShoppingCart();
          
          // Act
          actual = shoppingCart.Calculate(level, price, qty);
          
          // Assert
          actual.should.equal(expected); 
       }); 

       it('Normal 會員, 600 元商品 2 件, 那折扣後金額 1200', () => {
          // Arrange
          var level = 'Normal';
          var price = 600;
          var qty = 2;
          var expected = 1200;
          var actual = 0;
          var shoppingCart = new ShoppingCart();
          
          // Act
          actual = shoppingCart.Calculate(level, price, qty);
          
          // Assert
          actual.should.equal(expected); 
       }); 

       it('Normal 會員, 200 元商品 4 件, 那折扣後金額 800', () => {
          // Arrange
          var level = 'Normal';
          var price = 200;
          var qty = 4;
          var expected = 800;
          var actual = 0;
          var shoppingCart = new ShoppingCart();
          
          // Act
          actual = shoppingCart.Calculate(level, price, qty);
          
          // Assert
          actual.should.equal(expected); 
       }); 
    });
});

