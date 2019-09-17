## 請說明雜湊跟加密的差別在哪裡，為什麼密碼要雜湊過後才存入資料庫

- 雜湊：不需密鑰，無法逆向解出原始輸入。(雜湊不可逆)

(note: 雖然可以透過額外儲存的 rainbow table 來找尋原始輸入，但彩虹表是預先計算並儲存下來的，不是雜湊演算法本身的設計)


- 加密：需要密鑰，且可以透過解密得到原文或原碼。(加密可逆)

- 為什麼密碼要雜湊過後才存入資料庫？
  反向思考：若不經過雜湊，使用者的密碼將直接儲存至資料庫，當資料庫被駭客入侵，個人資料及資訊將外洩。
  問題：沒有雜湊的時候
  1. 輸入密碼時：資料庫驗證，內部人員直接看見明碼(竊取個資)
  2. 忘記密碼時：Email直接寄明碼給你(傳送過程中被中圖轉發)
  3. 資料庫：網站被攻陷，直接盜取並亂改你的資料庫資料
  
參考文章：https://blog.m157q.tw/posts/2017/12/25/differences-between-encryption-and-hashing/

## 請舉出三種不同的雜湊函數

- MD5 (已被證實不安全)
- SHA-1 (已被證實不安全)
- SHA-256 (高強度砸湊函數，越安全、也代表速度越慢)

## 請去查什麼是 Session，以及 Session 跟 Cookie 的差別

Cookie 實際存在 client 端，可以用來儲存資訊。
Session 是一個機制(抽象的概念)，client 與 server 互相溝通的一種過程。

在網站上進行身分驗證後，會產生一組對應的 Session ID

這組 ID 會儲存在 client 的 Cookie 及 server 中

當下一次再來拜訪的時候，利用這個 Session ID 來比對是不是這個使用者。

參考資料：https://tools.ietf.org/html/rfc2965

##  `include`、`require`、`include_once`、`require_once` 的差別

- include： 引入檔案若找不到或發生錯誤，顯示警告，會繼續執行後面的程式碼
- require： 引入檔案若找不到或發生錯誤，立即停止執行後面的程式碼
- include_once： 同 include，如果有相同檔案已經被引入就不會再重複引入一次。
- require_once： 同 require，如果有相同檔案已經被引入就不會再重複引入一次。
