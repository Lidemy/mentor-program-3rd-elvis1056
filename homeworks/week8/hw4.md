## 什麼是 Ajax？

Asynchronous JavaScript and XML

向伺服器(server)發送請求時，我們不必等待結果，可以繼續執行其他事務
等到結果回傳後再來處理回傳資料。



## 用 Ajax 與我們用表單送出資料的差別在哪？

若使用表單：送出資料時，須等待伺服器(server)處理資料，回傳給我們瀏覽器，畫面會有重新載入的跳轉。

若使用 Ajax：主要特色：取得部分所需資料，渲染部分頁面，不再重新渲染整個頁面。

## JSONP 是什麼？

Ajax 在交換資料時，常常因為瀏覽器的同源政策問題，而無法順利交換資料

我們發現 Web 頁面調用 javascript 文件不受到跨域的影響，

也剛好發現有一種叫做 JSON(是個以純文字為基底去儲存和傳送簡單結構資料)的方式，

他被原生的 javascript 支持，只要透過他把資料使用 function儲存，那不就可以來做調用，

將所需資料做成一個 JSON 格式並包裝成 function，使用 script 標籤來取得調用。

## 要如何存取跨網域的 API？

使用 node.js 這個工具來進行存取，瀏覽器存取會因為同源政策而限制我們存取別人的東西。
如果是要開放給別人做存取，必須在伺服器設定一個 header，內容加上 access-control-allow-origin: *
這樣就可以告訴瀏覽器所有的來源都可以存取這個網域的 API。
利用 JSONP 的方式存取。

## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？

第四週使用的 node.js 做存取，這週碰到是因為透過瀏覽器做存取，流覽器給我們的這個限制。