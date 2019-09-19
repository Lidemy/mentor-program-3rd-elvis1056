<?php
    function escape($str) {
        return htmlspecialchars($str, ENT_QUOTES, 'UTF-8');
    }

    function renderDeleteBtn($id) {
        return '
        <form method="POST" action="./handle_comment_delete.php">
            <input type="hidden" name="comment_id" value='. $id .' > 
            <input class="comment-delete" type="submit" value="刪除" />
        </form>
        ';
    }

    function renderEditBtn($id) {
        return '
        <form method="GET" action="./comment_edit.php">
            <input type="hidden" name="comment_id" value='. $id .' > 
            <input class="comment-edit" type="submit" value="編輯" />
        </form>
        ';
    }
?>