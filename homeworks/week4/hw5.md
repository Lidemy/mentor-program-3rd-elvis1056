## 請以自己的話解釋 API 是什麼

Ans.
API (Application Programming Interface)，應用程式介面

目的：幫助我們寫程式時，節省我們的時間及人力成本，好讓我們快速完成一些事情
Ps：我做這個的目的就是要賺錢

舉個生活化的範例：自動販賣機
總共自動販賣機會有三大步驟
1. 人：我好想喝綠茶
2. 販賣機：只要點擊我有的選項(綠茶)，我就可以給你XD
3. 飲料：綠茶(誰透過按鈕按下買我的，我就出來給你囉)

4. YA，拿到綠茶了

程式化的範例來對照一下：(以我的角度來看)
1. 自製網站：我要某一筆資料 Show 在我的網站
2. 對方提供的API：透過他規定的格式傳給他
3. 對方網站：他給我資料(檢查一下有沒有照我的規定告訴我)，對了對了這是對的格式，你很棒，可以給你資料

4. YA，拿到資料了

所以 API 其實就是一個中間人(媒介)拉XD

參考網站：[什麼是API?](https://cola.workxplay.net/what-is-an-api/)

## 請找出三個課程沒教的 HTTP status code 並簡單介紹

200 OK
我們的請求已成功，拿到資料囉

204 No Content
我們的請求已成功，不過沒有任何內容

301 Moved Permanently
我們請求的資源已永久移動到新位置(我們搬家了XD)

403 Forbidden
我們禁止使用

404 Not Found
瀏覽器找不到我們發請求的資源(你要的資料我們沒有拉)

405 Method Not Allowed
禁止使用我們不允許的請求方法(不要刪除我拜託不要)

500 Internal Server Error
通用錯誤訊息，伺服器(他們)遇到了一個未曾預料的狀況

參考資料：[有趣的一些回應訊息](https://paulmurraywork.wordpress.com/2011/03/10/http-response-codes-explained/)

## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

Base URL：http://mymy-restaurant.com/

GET / POST / DELETE / PATCH

使用說明：

做什麼：取得所有餐廳資訊
方法：GET
路徑：/restaurant/
參數：_limit=10(限制回傳 10 筆資料)
範例(request)：http://mymy-restaurant.com/restaurant?_limit=20
回傳(response)：
10筆資料，怕占太多版面就先不列

做什麼：取得特定餐廳資訊
方法：GET
路徑：/restaurant?:id
參數：id(需要 valid 的)
範例(request)：http://mymy-restaurant.com/restaurant?id=6
回傳(response)：
{
    "data":[
        {
            "id": "6",
            "name": "lucky restaurant",
            "address": "艾恩葛朗特第六層"
        }
    ]
}

做什麼：新增特定餐廳資訊
方法：POST
路徑：/restaurant?name=xxx
參數：name(餐廳名稱)
範例(request)：http://mymy-restaurant.com/restaurant?name=xxx
回傳(request)：
{
    "data":[
        {
            "id": "52",
            "name": "hahaha restaurant",
            "address": "艾恩葛朗特第五十二層"
        }
    ]
}

做什麼：更新特定餐廳資訊
方法：PATCH
路徑：/restaurant?name=lulu restaurant&id=6
參數：name&id
範例(request)：http://mymy-restaurant.com/restaurant?name=lulu restaurant&id=6
回傳(response)：
{
    "data":[
        {
            "id": "6",
            "name": "lulu restaurant",
            "address": "艾恩葛朗特第六層"
        }
    ]
}

做什麼：刪除特定餐廳資訊
方法：PATCH
路徑：/restaurant?:id
參數：id
範例(request)：http://mymy-restaurant.com/restaurant?id=X
回傳(response)：none