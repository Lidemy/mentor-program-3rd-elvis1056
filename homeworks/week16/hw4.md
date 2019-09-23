## CSS 預處理器是什麼？我們可以不用它嗎？

Ans.
現代前端開發近年來開始變為複雜，過往 CSS 寫法不具彈性且較不好維護
因此產生了 CSS 預處理器，使用程式化的方式(ex.變數的概念)使 CSS 具有彈性及維護管理
最重要的是會讓開發時間縮短(可以早點做完)
目前常見的預處理器有 SASS/SCSS, LESS, Stylus，功能上類似，語法有些差異

Ans.
當然可以不使用它，假使專案不需要做太多複雜的層級，那就放心的用原來的 CSS。

## 請舉出任何一個跟 HTTP Cache 有關的 Header 並說明其作用。

*** Cache-Control 是一個 HTTP/1.1 後引入的表頭，其中有不同屬性可以設定

* Cache Control: max-age= n (sec)
    快取檔案有效期限有多久(單位是秒，意思是 `n` 秒後才會過期)

* Cache-control: no-store
    不使用快取，每次都與 Server 拿資料

* Cache Control: no-cache
    與 Server 詢問有沒有新的資料，沒有的話就沿用之前儲存的快取檔案

## Stack 跟 Queue 的差別是什麼？

Stack：Last In First Out (後進先出)

Queue：First In First Out (先進先出)

## 請去查詢資料並解釋 CSS Selector 的權重是如何計算的（不要複製貼上，請自己思考過一遍再自己寫出來）

權重的計算可以用數學的方式來做(前提是你懂數學)

那我們就開始吧

首先要知道一個總數 1,0,0,0,0 (10000)

怎麼樣會產生這個數字呢？

.product {
    width: 200px;!important
}

那它的權重就是這個 1,0,0,0,0

簡單舉例後來
快速來看一下各個權重

* (1,0,0,0,0) !important
* (0,1,0,0,0) inline style
* (0,0,1,0,0) ID
* (0,0,0,1,0) Class
* (0,0,0,0,1) element(ex. div, p, ul, li, header, footer, article....)
