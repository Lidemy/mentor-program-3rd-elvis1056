// 驗證 text 類型的 input
function checkInputText(element) {
  const isRequire = element.classList.contains('require');
  if (!isRequire) return;
  const responseValue = element.querySelector('.response').value;
  if (isRequire && responseValue) {
    element.querySelector('.response').classList.remove('focus__redBottom');
    element.classList.remove('content__warnBlock');
    element.querySelector('.content__warn').classList.add('hide');
    element.classList.add('isVaidateValue');
  } else {
    element.classList.add('content__warnBlock');
    element.querySelector('.content__warn').classList.remove('hide');
  }
}

// 驗證 checkbox 類型的 input

function validateCheckOption() {
  const basic = document.getElementById('basic');
  const advence = document.getElementById('advence');
  const optionBlock = document.querySelector('.content__option');
  const isRequire = document.querySelector('.content__option').classList.contains('require');
  if (isRequire && !(basic.checked || advence.checked)) {
    optionBlock.classList.add('content__warnBlock');
    optionBlock.querySelector('.content__warn').classList.remove('hide');
  } else if (isRequire && (basic.checked || advence.checked)) {
    optionBlock.classList.remove('content__warnBlock');
    optionBlock.classList.add('isVaidateValue');
    optionBlock.querySelector('.content__warn').classList.add('hide');
  }
}

function hasVaidateValue() {
  const arr = [];
  document.querySelectorAll('.response').forEach((element) => {
    arr.push(element.parentNode.classList.contains('isVaidateValue'));
  });
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === false) {
      return false;
    }
  }
  return true;
}

window.onload = () => {
  // text 類型的 input : focus / blur
  document.querySelectorAll('.response').forEach((element) => {
    element.addEventListener(('focus'), () => {
      element.classList.add('focus__redBottom');
    });
    element.addEventListener(('blur'), () => {
      checkInputText(element.parentNode);
    });
  });

  document.querySelector('.content__option').addEventListener(('click'), validateCheckOption);

  document.querySelector('.submit').addEventListener('click', (e) => {
    // 阻止跳頁
    e.preventDefault();

    // 儲存要傳的資料
    const result = [];

    // 檢查有沒有填寫完成
    document.querySelectorAll('.content').forEach((element) => {
      checkInputText(element);
    });

    // 檢查有沒有選擇類型
    validateCheckOption();

    // 開始寫入資料
    if (hasVaidateValue()) {
      document.querySelectorAll('.response').forEach((element) => {
        const responseValue = element.value;
        result.push(responseValue);
      });
      document.getElementsByName('level').forEach((element) => {
        if (element.checked) {
          result.push(element.parentNode.querySelector('.checkbox__text').textContent);
        }
      });
    }
    console.log(result);
  });
};
