## Get Start
----
* Base URL：http://elvis.com.tw/todoAPI/todo.php

### example todoAPI request

* [GET] 獲取全部 todo

> curl -X GET http://elvis.com.tw/todoAPI/todo.php

* [GET] 獲取單筆 todo (todo_id 為 77)

> curl -X GET http://elvis.com.tw/todoAPI/todo.php?todo_id=77

* [DELETE] 刪除單筆 todo (todo_id 為 77)

> curl -X DELETE http://elvis.com.tw/todoAPI/todo.php?todo_id=77

* [POST] 新增單筆 todo (content 內容為 yoyoyo)

> curl -X POST http://elvis.com.tw/todoAPI/todo.php -d content=yoyoyo

* [PATCH] 更新單筆 (更新 todo_id 為 5 內容改為 yoyo)

> curl -X PATCH http://elvis.com.tw/todoAPI/todo.php?todo_id=5 -d content=yoyo

### example response

* id : todo_id 
* todo : content 內容
* type : 狀態
* create_at : 建立時間
`
[
    {
        "id": 1,
        "todo": "測試一下",
        "type": 0,
        "create_at": "2019-10-18 01:22:20"
    }
]
`
