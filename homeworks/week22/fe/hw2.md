## React Router 背後的原理你猜是怎麼實作的？

不太會猜直接 Google

為了解決一個問題：URL與UI界面同步的問題(當url發生變化時，web界面也會隨之改變)

URL 對應到 Location
UI 是由 react components 來決定的

在 window.history 的基礎上，實現 URL 與 UI 界面同步

首先瞭解 history API

window.history.back() // 回到 session history 紀錄中的前一頁，等同於使用者按下瀏覽器的上一頁按鈕。相當於 history.go(-1)。
window.history.forward() // 回到 session history 紀錄中的下一頁，等同於使用者按下瀏覽器的下一頁按鈕。相當於 history.go(1)。
window.history.go() 
// 自 session history 紀錄中載入一個頁面，利用該頁面相對於目前頁面的所在位置，例如 -1 為前一頁或 1 為下一頁。
// 若指定了一個超出範圍的值（舉例來說，在 session history 沒有先前訪頁面的情況下指定 -1），此方法將會是靜默（不會產生錯誤）且沒有任何效果的。
// 不帶參數或是傳入 0 呼叫 go() 會重新載入目前頁面。

再來瞭解，以下 HTML5 裡引入了新的 API
window.history.pushState(state, title, url) // 建立一個新的歷史紀錄。
window.history.replaceState() // 修改目前的歷史紀錄而不是創造一個新的。

需要注意的是，調用上述 history.pushState() 或 history.replaceState()
不會觸發 popstate 事件。
popstate事件只會在瀏覽器某些行為下觸發，譬如點擊後退、前進按鈕
(或者在JavaScript中調用 history.back()、history.forward()、history.go() 方法 )。

`<Route>` 決定要 render 哪個特定 path="/XXXX"
`<Link>`  決定要去哪個特定 URL
透過 `history` 去監聽瀏覽器 URL 的變化，實現 URL 與 UI 界面同步

以下同學整理的不錯拿來記錄在自己這邊

### browserHistory：
- 原理：利用 HTML5 的 History API (history.pushState(),  replaceState(), popstate()) 進行網址的修改
- 優點：網址簡潔
- 缺點：History API 是 HTML5 的特性，因此較老舊的瀏覽器則不支援，且需要搭配後端轉址設定

### hashHistory：
- 原理：利用瀏覽器不將錨點變化視做頁面變化的特性來轉址，透過onhashchange 來偵測網址變更
- 優點：適用所有瀏覽器，且不需要搭配後端轉址
- 缺點：網址中會有 # ，視覺上較不簡潔

## SDK 與 API 的差別是什麼？

參考文章：https://www.zhihu.com/question/21691705

SDK：工具包的概念，可能會包含作業環境、語言甚至API等等
(Software Development Kit 軟體開發工具組) 
用來開發某一個平台的程式的工具包

API：傳輸資料的接口，要使用必須符合 API 文件規範。
同一平台下的程式取用它的功能的函式庫

## 在用 Ajax 的時候，預設是不會把 Cookie 帶上的，要怎麼樣才能把 Cookie 一起帶上？

CORS 這個機制只會運作在 javascript 送出 XHR 或 fetch 時，一般像是 curl 或 postman 並沒有這個機制

Client side && Server side 都需要做設定

Client side

axios.get('http://server.com', {withCredentials: true})

Server side

Access-Control-Allow-Credentials = true

或

Client side

$.ajax({
    method: 'get',
    url: 'http://server.com',
    xhrFields: {
        withCredentials: true
    }
})

Server side

Access-Control-Allow-Credentials = true

參考資料：https://github.com/yinxin630/blog/issues/2

