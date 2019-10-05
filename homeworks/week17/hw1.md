console.log(1)
setTimeout(() => {
  console.log(2)
}, 0)
console.log(3)
setTimeout(() => {
  console.log(4)
}, 0)
console.log(5)

---

執行結果為
1
3
5
2
4

---

1.
首先執行 console.log(1)
將 console.log(1) 丟進 Call Stack
直接執行，打印出 1

ps.此時結果 1

2.
再來，
setTimeout(() => {
  console.log(2)
}, 0)
丟進 Call Stack，發現有 setTimeout (非同步)
丟進 Web Apis，等待 0 秒後
丟進 Event Queue(繼續等待直到 Call Stack 完成後才會執行到這)

ps.此時結果 1

3.
執行 console.log(3)
將 console.log(3) 丟進 Call Stack
直接執行，打印出 3

ps.此時結果 1,3

4.
再來，
setTimeout(() => {
  console.log(4)
}, 0)
丟進 Call Stack，發現有 setTimeout (非同步)
丟進 Web Apis，等待 0 秒後
丟進 Event Queue(繼續等待直到 Call Stack 完成後才會執行到這)

ps.此時結果 1,3

5.
執行 console.log(5)
將 console.log(5) 丟進 Call Stack
直接執行，打印出 5

ps.此時結果 1,3,5
Call Stack 清空

6.
Call Stack 結束
開始執行 Event Queue

ps.此時結果 1,3,5

7.
將第一個等待的放進 Call Stack
() => {
  console.log(2)
}
執行 console.log(2)
直接執行，打印出 2
Call Stack 清空

ps.此時結果 1,3,5,2

8.
將第二個等待的放進 Call Stack
() => {
  console.log(4)
}
執行 console.log(4)
直接執行，打印出 4
Call Stack 清空

ps.此時結果 1,3,5,2,4

9.
Event Queue 清空
Call Stack 清空
程式結束
