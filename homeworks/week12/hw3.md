## 請說明 SQL Injection 的攻擊原理以及防範方法

攻擊原理：

* 利用 SQL 語法，在可輸入的地方放入可使用語法，來改變原始 SQL 語句，抓取資料。
* 讓輸入內容變成程式碼的一部份，藉此操控程式碼的運行，達成特殊目的。

直接上範例：

$sql = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
在 username 輸入 '' or 1=1 (如同這樣 username = '' or 1=1)
迫使條件為 true 造成非預期的結果(此時就產生了資料被竊取的風險)

防範方法：使用 prepare statement，將輸入的東西限定為字串。

## 請說明 XSS 的攻擊原理以及防範方法

參考文章：https://forum.gamer.com.tw/Co.php?bsn=60292&sn=11267

攻擊原理：

* 輸入一段可以被執行的程式碼在網頁中或網址上，讓使用者只要一點擊網頁就會自動執行惡意程式。
* 3種型態
-- Stored XSS (儲存型)
-- Reflected XSS (反射型)
-- DOM-Based XSS (基於 DOM 的類型)

防範方法：可以利用 html 內建的 `htmlspecialchars()` 來 escape 字元，讓輸出在網頁上的內容是純文字。

## 請說明 CSRF 的攻擊原理以及防範方法

攻擊原理：
* 偽造他人權限執行操作

情境：利用惡意連結讓使用者在不知覺的情況下，向某個已登入的網站發出請求，而使用者卻完全不知覺。

防範方法：
* 檢查 Referer，查看這個 domain 來源是否合法，是的話 domain 發出的請求才能接受，但這個方法因為某些瀏覽器或使用者不會帶 Refer 上來，有機會拒絕掉真的使用者的 request，所以這個方法不完善。
* 利用圖形、簡訊等驗證碼，多一道檢查可以更確保是使用者本人發出的請求。(現行多數網站以此進行防範)
* SameSite Cookie，有兩種模式`Strict`和`Lax`。(幫 cookie 再加一層防禦)
