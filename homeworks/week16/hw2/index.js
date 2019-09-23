
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

console.log(queue.push(5));
console.log(queue.push(6));
console.log(queue.push(7));
console.log(queue.pop());
console.log(queue.pop());

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

console.log(stack.push(2));
console.log(stack.push(3));
console.log(stack.push(4));
console.log(stack.pop());
console.log(stack.pop());
