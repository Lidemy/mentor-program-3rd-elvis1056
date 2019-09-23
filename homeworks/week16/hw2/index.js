
function Stack() {
  const arr = [];
  return {
    push: (x) => {
      arr[arr.length] = x;
      return arr;
    },
    pop: () => {
      const { length } = arr.length;
      arr.splice(length - 1, 1);
      return arr;
    },
  };
}

const stack = new Stack();

console.log(stack.push(5));
console.log(stack.push(6));
console.log(stack.push(7));
console.log(stack.pop());
console.log(stack.pop());

function Queue() {
  const arr = [];
  return {
    push: (x) => {
      arr[arr.length] = x;
      return arr;
    },
    pop: () => {
      arr.splice(0, 1);
      return arr;
    },
  };
}

const queue = new Queue();

console.log(queue.push(2));
console.log(queue.push(3));
console.log(queue.push(4));
console.log(queue.pop());
console.log(queue.pop());
