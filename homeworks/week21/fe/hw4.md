## 為什麼我們需要 React？可以不用嗎？

Ans.
如果我們使用 React 可以有效的將前端網頁以零件的方式做組裝
未來在維護上可以較為快速的更新修改

如果我們的網頁較為簡單可以選擇不使用

## React 的思考模式跟以前的思考模式有什麼不一樣？

Ans.

過去的思考方是以每個 dom 物件做操作

使用 React 後的思考方式
1. 把資料儲存起來(state)
2. 將 DOM 物件建構好(他會幫我們把dom 重新渲染)
我們可以比較專注在資料的處理上

## state 跟 props 的差別在哪裡？

state 是元件資料本身的狀態
props 是從上層傳下來的資料狀態

## 請列出 React 的 lifecycle 以及其代表的意義

參考：https://www.jianshu.com/p/8f6dd832e57a

* constructor 構造方法
在使用 constructor() 的時候必須要與 super() 一起使用
如果沒有使用在 new 一個新的 class 時有可能會報錯。
會報錯的原因是裡面的 function 是沒有自己的 this，它只能繼承自己上層(父類) class 的 this
透過 super() 這個方是讓上層(父類) class 的 this 繼承給下層(子類)。

- React Component 生命週期
Mounting：已插入真實的 DOM
Updating：正在被重新渲染
Unmounting：已移出真實的 DOM

* componentDidMount

執行場景：在 render() 執行之後

常見用法：通常在這裡使用 AJAX 取得資料
此時背景已經是 constructor() 建立完初始資料，部分非同步的資料尚未進入
可以使用 setState() 方法觸發重新渲染 (re-render)

* componentDidUpdate

執行場景：在發生更新 或 componentWillUpdate(nextProps, nextState)

常見用法：通常在這裡讀取寫入資料
此時背景已經是 constructor() 建立完初始資料且資料被重新 setState
受到 state 狀態更新引想做觸發

* componentWillUnmount

執行場景：在發生要將 DOM 移除，移除一些裡面 setInterval 或 setTimeout 的狀態
