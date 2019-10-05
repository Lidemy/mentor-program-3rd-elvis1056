for(var i=0; i<5; i++) {
  console.log('i: ' + i)
  setTimeout(() => {
    console.log(i)
  }, i * 1000)
}

---

i: 0
i: 1
i: 2
i: 3
i: 4
5 (迴圈跑完後出現)
5 (約等 1 秒後)
5 (約等 2 秒後)
5 (約等 3 秒後)
5 (約等 4 秒後)

---

迴圈開始

i=0
console.log(0)
進入 Call Stack 執行
印出 0
setTimeout 丟進 Web apis
放入 Callback Queue (等待時間 0 毫秒)

i=1
console.log(1)
進入 Call Stack 執行
印出 1
setTimeout 丟進 Web apis
放入 Callback Queue (等待時間 1000 毫秒)

i=2
console.log(2)
進入 Call Stack 執行
印出 2
setTimeout 丟進 Web apis
放入 Callback Queue (等待時間 2000 毫秒)

i=3
console.log(3)
進入 Call Stack 執行
印出 3
setTimeout 丟進 Web apis
放入 Callback Queue (等待時間 3000 毫秒)

i=4
console.log(4)
進入 Call Stack 執行
印出 4
setTimeout 丟進 Web apis
放入 Callback Queue (等待時間 4000 毫秒)

i=5
跳出迴圈
檢查 Call Stack
確認 Call Stack 沒有東西了
開始 Callback Queue
將第一個 Callback Queue 放入 Call Stack

目前 i = 5
setTimeout(() => {
    console.log(5)
  }, 0 * 1000)
印出 5

目前 i = 5
setTimeout(() => {
    console.log(5)
  }, 1 * 1000)
印出 5

目前 i = 5
setTimeout(() => {
    console.log(5)
  }, 2 * 1000)
印出 5

目前 i = 5
setTimeout(() => {
    console.log(5)
  }, 3 * 1000)
印出 5

目前 i = 5
setTimeout(() => {
    console.log(5)
  }, 4 * 1000)
印出 5

檢查 Call Stack
確認 Call Stack 沒有東西了
開始 Callback Queue
確認 Callback Queue 沒有東西了
檢查 Call Stack
確認 Call Stack 沒有東西了
結束
