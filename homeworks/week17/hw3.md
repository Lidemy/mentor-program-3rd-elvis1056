var a = 1
function fn(){
  console.log(a) // 1
  var a = 5
  console.log(a) // 5
  a++ // 6
  var a
  fn2()
  console.log(a) // 6
  function fn2(){
    console.log(a) // 6
    a = 20
    b = 100
  }
}
fn()
console.log(a)
a = 10
console.log(a)
console.log(b)

---

undefined
5
6
20
1
10
100

---

Execution Contexts(EC) - 執行環境

variable object (VO) - 儲存宣告的變數和函式

1. globalEC - 編譯
2. globalEC - 執行
3. fnEC - 編譯
4. fnEC - 執行
5. fn2EC - 編譯
6. fn2EC - 執行


1.  globalEC - 編譯
    globalEC: {
        VO: {
            a: undefined
            fn(): 0x11
        },
        scipeChain: [globalEC.VO],
        this: ...
    }


2.  globalEC - 執行 (開始 Call Stack)
    
    * var a = 1 --- globalEC.VO.a: 1
    * fn() --- 執行

    globalEC: {
        VO: {
            a: 1
            fn(): 0x11
        },
        scipeChain: [globalEC.VO],
        this: ...
    }


3.  fnEC - 編譯

    fnEC: {
        VO: {
            arguments: {
                none // 沒有東西傳地進來
            },
            a: undefined,
            fn2: 0x22
        },
        scipeChain: [fnEC.VO, globalEC.VO],
        this: ...
    }

    globalEC: {
        VO: {
            a: 1
            fn(): 0x11
        },
        scipeChain: [globalEC.VO],
        this: ...
    }


4.  fnEC - 執行 (開始 Call Stack)

    * console.log(a) --- 印出 undefined
    * var a = 5 --- fnEC.VO.a: 5
    * console.log(a) --- 印出 5
    * a++ --- fnEC.VO.a: 6
    * var a --- 已宣告，不做動作
    * fn2() --- 執行

    fnEC: {
        VO: {
            arguments: {
                none // 沒有東西傳地進來
            },
            a: 6,
            fn2: 0x22
        },
        scipeChain: [fnEC.VO, globalEC.VO],
        this: ...
    }

    globalEC: {
        VO: {
            a: 1
            fn(): 0x11
        },
        scipeChain: [globalEC.VO],
        this: ...
    }
 

5.  fn2EC - 編譯

    fn2EC: {
        VO: {
            arguments: {
                none // 沒有東西傳地進來
            }
        },
        scipeChain: [fn2EC.VO, fnEC.VO, globalEC.VO],
        this: ...
    }

    fnEC: {
        VO: {
            arguments: {
                none // 沒有東西傳地進來
            },
            a: 6,
            fn2: 0x22
        },
        scipeChain: [fnEC.VO, globalEC.VO],
        this: ...
    }

    globalEC: {
        VO: {
            a: 1
            fn(): 0x11
        },
        scipeChain: [globalEC.VO],
        this: ...
    }


6.  fn2EC - 執行 (開始 Call Stack)

    * console.log(a) --- 找 fn2EC.VO 找不到，往上ㄧ層找 fnEC.VO，找到 a，印出 6
    * a = 20 --- 找 fn2EC.VO 找不到，往上ㄧ層找 fnEC.VO，找到 a，將 a: 20
    * b = 100 --- 找 fn2EC.VO 找不到，往上ㄧ層找 fnEC.VO 找不到，往上ㄧ層找 globalEC.VO 找不到
    globalEC.VO 宣告並賦值 b: 100
    * 執行結束

    fn2EC: {
        VO: {
            arguments: {
                none // 沒有東西傳地進來
            }
        },
        scipeChain: [fn2EC.VO, fnEC.VO, globalEC.VO],
        this: ...
    }

    fnEC: {
        VO: {
            arguments: {
                none // 沒有東西傳地進來
            },
            a: 20,
            fn2: 0x22
        },
        scipeChain: [fnEC.VO, globalEC.VO],
        this: ...
    }

    globalEC: {
        VO: {
            a: 1
            fn(): 0x11
        },
        scipeChain: [globalEC.VO],
        this: ...
    }
    
7.  ...
    var a
    fn2()
    console.log(a) --- 回到這個階段 fnECVO 有 a: 20，印出 20
    ...

8.  console.log(a) --- globalEC.VO 印出 1
    a = 10 --- globalEC.VO 的 a: 10
    console.log(a) --- globalEC.VO 印出 10
    console.log(b) --- globalEC.VO 印出 100


*** 執行結束 ***