# TDD 練習題目

建立一個 購物車 應用程式，必須要能夠根據會員的等級，提供不同的折扣方式。

1. 如果是 VIP 會員，只要購物滿 500 元，就一律有 8 折優惠
2. 如果是 一般會員 (Normal)，除了購物必須要滿 1000 元，而且購買超過 3 件商品才能擁有 85 折優惠

## 練習步驟

1. 請使用 TDD 的方式進行開發, 一個案例, 一個實現
2. 複雜度盡可能的低
3. 如果可以的話，盡量不要使用 if

## 測試案例

1. VIP 會員, 150 元商品 3 件, 那折扣後金額 450
1. VIP 會員, 300 元商品 2 件, 那折扣後金額 480
1. Normal 會員, 400 元商品 2 件, 那折扣後金額 800
1. Normal 會員, 300 元商品 4 件, 那折扣後金額 1020
1. Normal 會員, 600 元商品 2 件, 那折扣後金額 1200
1. Normal 會員, 200 元商品 4 件, 那折扣後金額 800
