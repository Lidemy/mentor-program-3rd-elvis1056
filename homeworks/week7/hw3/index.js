window.onload = () => {
  let firstNum = 0;
  let sec = 0;
  let result = 0;
  let op = null;
  let opagain = null;

  function getResult() {
    return document.querySelector('.view').innerText;
  }

  function setResult(str) {
    document.querySelector('.view').innerText = str;
  }

  function sum() {
    if (firstNum !== '') {
      if (opagain === '=') {
        firstNum = result;
        if (op === '+') {
          document.querySelector('.view').innerText = Number(firstNum) + Number(sec);
          firstNum = getResult();
          result = firstNum;
        } else if (op === '-') {
          document.querySelector('.view').innerText = Number(firstNum) - Number(sec);
          firstNum = getResult();
          result = firstNum;
        } else if (op === '*') {
          document.querySelector('.view').innerText = Number(firstNum) * Number(sec);
          firstNum = getResult();
          result = firstNum;
        } else if (op === '/') {
          document.querySelector('.view').innerText = Number(firstNum) / Number(sec);
          firstNum = getResult();
          result = firstNum;
        }
      } else {
        sec = document.querySelector('.view').innerText;
        if (op === '+') {
          setResult('');
          result = Number(firstNum) + Number(sec);
          document.querySelector('.view').innerText = result;
          opagain = '=';
        } else if (op === '-') {
          setResult('');
          result = Number(firstNum) - Number(sec);
          document.querySelector('.view').innerText = result;
          opagain = '=';
        } else if (op === '*') {
          setResult('');
          result = Number(firstNum) * Number(sec);
          document.querySelector('.view').innerText = result;
          opagain = '=';
        } else if (op === '/') {
          setResult('');
          result = Number(firstNum) / Number(sec);
          document.querySelector('.view').innerText = result;
          opagain = '=';
        }
      }
    } else {
      document.querySelector('.view').innerText = firstNum;
    }
  }

  function operator(mark) {
    if (mark === '+') {
      firstNum = getResult();
      setResult('');
      op = '+';
      opagain = null;
    } else if (mark === '-') {
      firstNum = getResult();
      op = '-';
      setResult('');
      opagain = null;
    } else if (mark === '*') {
      firstNum = getResult();
      op = '*';
      setResult('');
      opagain = null;
    } else if (mark === '/') {
      firstNum = getResult();
      op = '/';
      setResult('');
      opagain = null;
    }
  }

  function appendNum(num) {
    if (Number(document.querySelector('.view').innerText) === 0) {
      document.querySelector('.view').innerText = num;
    } else {
      document.querySelector('.view').innerText += num;
    }
  }

  document.querySelectorAll('.num').forEach((element) => {
    const num = element.innerText;
    element.addEventListener('click', () => {
      appendNum(num);
    });
  });

  document.querySelectorAll('.mark').forEach((element) => {
    const mark = element.innerText;
    element.addEventListener('click', () => {
      operator(mark);
    });
  });

  document.querySelector('.count').addEventListener('click', () => {
    sum();
  });
};
