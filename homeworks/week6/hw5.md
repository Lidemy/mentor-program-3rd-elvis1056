## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。

i: 斜體
br: 換行
hr: 水平線
label: 標籤
form: 表單
option: 下拉列表選項

## 請問什麼是盒模型（box modal）

將網頁裡面，每個元素都看成一個一個的小盒子
開啟 chrome 開發人員工具，就可以看到小盒子
由內到外分別為內容、padding、border、margin
透過這些 CSS 屬性改變他們的表現，讓我們設計美觀

## 請問 display: inline, block 跟 inline-block 的差別是什麼？

display: inline;
行內容器都會在同一行不換行，所有的「文字」、「圖片」都在同一行。
width、height 無法被設置。
margin 上下無法被設置。
padding 可以設置。

display: block;
行內容器都會以區塊呈現，會強迫換行。

display: inline-block;
可以在同一行自動排版，而且還可以設置 width 及 height。

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

position: static;
若沒有選擇則為最原始預設位置。(出生在哪就在哪)

position: relative;
如果這個元素裡面設定：top、right、bottom、left 的屬性，
會使這個元素「相對的」調整原來該出現的所在位置。(叛逆的移動了)

position: absolute;
絕對位置，如果父層級為 relative 時，則會以父層級的初始位置為基準，來移動自己所在位置。(看看爸媽在哪我偏偏要在別的地方)

position: fixed;
固定位置，以 body 為父層級，定位容器在畫面中任意位置，不隨著畫面移動改變。(指認天皇才是最棒的)