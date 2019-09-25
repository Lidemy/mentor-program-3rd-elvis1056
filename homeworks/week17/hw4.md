const obj = {
  value: 1,
  hello: function() {
    console.log(this.value)
  },
  inner: {
    value: 2,
    hello: function() {
      console.log(this.value)
    }
  }
}
  
const obj2 = obj.inner
const hello = obj.inner.hello
obj.inner.hello() // ??
obj2.hello() // ??
hello() // ??

---

2
2
undefined


---

結論： this 的值和被定義在哪裡無關，和 function 怎麼被呼叫有關


1. ?? ， 2
obj.inner.hello()

obj.inner.hello.call(obj.inner)

this 指向的是

    inner: {
        value: 2,
        hello: function() {
        console.log(this.value)
        }
    }

2. ?? ， 2

obj2.hello()

obj.inner.hello().call(obj.inner)

this 指向的是

    inner: {
        value: 2,
        hello: function() {
        console.log(this.value)
        }
    }

3. ?? ， undefined

window.hello().call(window)
