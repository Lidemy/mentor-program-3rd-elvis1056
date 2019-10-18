function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function render() {
  $.ajax({
    method: 'GET',
    url: './todo.php',
    dataType: 'json',
    success: (res) => {
      $('.todos').empty();
      for (let i = 0; i < res.length; i += 1) {
        const check = parseInt(res[i].type, 10) === 1 ? 'checked' : '';
        const id = escapeHtml(res[i].id);
        const todo = escapeHtml(res[i].todo);
        $('.todos').append(`<div class="todo" data-id="${id}">
                                        <label for="${id}"><input class="check" type="checkbox" id="${id}" ${check}></label>
                                        <div class="content">${todo}</div>
                                        <input class="content_edit none" value=${todo}>
                                        <div class="content_edit_cancel none">取消</div>
                                        <div class="edit">edit</div>
                                        <div class="delete">delete</div>
                                    </div>`);
      }
    },
    error: () => {
      alert('網路連現不穩，請稍候再試');
    },
  });
}

function addtodo(content) {
  $.ajax({
    method: 'POST',
    url: './todo.php',
    data: {
      content,
    },
    success: () => {
      $('.add_todo').val('');
      render();
    },
    error: () => {
      $('.add_todo').val('');
      alert('新增失敗');
      render();
    },
  });
}

function deleteTodo(todoId) {
  $.ajax({
    method: 'DELETE',
    url: `./todo.php?todo_id=${todoId}`,
    data: {},
    dataType: 'JSON',
    success: () => {
      alert('刪除成功');
      render();
    },
    error: () => {
      alert('刪除失敗');
      render();
    },
  });
}

function editCheckTodo(todoId, check) {
  $.ajax({
    method: 'PATCH',
    url: `./todo.php?todo_id=${todoId}&check=${check}`,
    data: {},
    dataType: 'JSON',
    success: () => { },
    error: () => {
      alert('編輯失敗');
    },
  });
}

function updateTodo(todoId, content) {
  $.ajax({
    method: 'PATCH',
    url: `./todo.php?todo_id=${todoId}`,
    data: {
      content,
    },
    dataType: 'JSON',
    success: () => {
      render();
    },
    error: () => {
      alert('編輯失敗');
      render();
    },
  });
}

$(document).ready(() => {
  render();
  $('.add_item').on('click', '.add_todo_btn', () => {
    const content = $('.add_todo').val();
    if (content !== '') {
      addtodo(content);
    } else {
      alert('請輸入內容');
    }
  });
  $('.add_item').on('keypress', (e) => {
    const content = $('.add_todo').val();
    if (e.keyCode === 13) {
      if (content !== '') {
        addtodo(content);
      } else {
        alert('請輸入內容');
      }
    }
  });
  $('.todos').on('click', '.delete', (e) => {
    const todoId = $(e.target.parentElement).attr('data-id');
    // eslint-disable-next-line no-restricted-globals
    if (confirm('是否刪除此事項？')) {
      deleteTodo(todoId);
    }
  });
  $('.todos').on('click', '.check', (e) => {
    const todoId = $(e.target.parentElement.parentElement).attr('data-id');
    const checkBoolean = $(e.target).is(':checked');
    if (checkBoolean) {
      const check = 1;
      editCheckTodo(todoId, check);
    } else {
      const check = 0;
      editCheckTodo(todoId, check);
    }
  });
  $('.todos').on('click', '.edit', (e) => {
    const content = $(e.target.parentNode).find('.content');
    const contentEdit = $(e.target.parentNode).find('.content_edit');
    const contentEditCancel = $(e.target.parentNode).find('.content_edit_cancel');
    content.hide();
    contentEdit.removeClass('none');
    contentEditCancel.removeClass('none');
  });
  $('.todos').on('click', '.content_edit_cancel', (e) => {
    const content = $(e.target.parentNode).find('.content');
    const contentEdit = $(e.target.parentNode).find('.content_edit');
    const contentEditCancel = $(e.target.parentNode).find('.content_edit_cancel');
    content.show();
    contentEdit.addClass('none');
    contentEditCancel.addClass('none');
  });
  $('.todos').on('keypress', (e) => {
    if (e.keyCode === 13) {
      const todoId = $(e.target.parentElement).attr('data-id');
      const content = $(e.target).val();
      updateTodo(todoId, content);
    }
  });
});
