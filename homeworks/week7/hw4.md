## 什麼是 DOM？

瀏覽器提供的溝通管道 (DOM)
在網頁中 DOM 可以理解為一棵樹(Tree)、每個樹的組成都是一個節點 (Node)
我們可以利用程式語言 (javascript)，來控制這棵樹長的模樣

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？

傳遞的順序：由上往下(捕獲)，在由下往上(冒泡)
當使用者觸發事件後，會由外而內(由上往下)傳遞，
抵達事件目標後，
再由內而外(由下往上)傳遞執行結果。

## 什麼是 event delegation，為什麼我們需要它？

當有過多重複的監聽器時
透過事件代理，讓我們可以減少使用重複的事件(功能)

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？

event.preventDefault() 是終止預設行為
event.stopPropgation() 是阻止事件往後繼續傳遞

<body>
  <a id="aTest" href="http://www.google.com">google</a>
  <input type="text" id="inputTest">
</body>
<script>
    document.getElementById('inputTest').addEventListener('keypress', (e) => {
        e.preventDefault();
    })
    document.getElementById('aTest').addEventListener('click', (e) => {
        e.preventDefault();
    })
</script>