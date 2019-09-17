<?php
    function setToken($conn, $nickname) {
        $token = uniqid();
        $sql = "DELETE FROM board_certificate WHERE username='$nickname'";
        $conn->query($sql);

        $sql = "INSERT INTO board_certificate (username, token) VALUES ('$nickname', '$token')";
        echo $sql;
        $conn->query($sql);
        setcookie("token",$token, time()+3600*24);
    }

    function getUsernameByToken($conn, $token) {
        $sql = "SELECT * FROM board_certificate WHERE token='$token'";
        $result = $conn->query($sql);
        if ($result->num_rows<=0) {
            return false;
        } else {
            $row = $result->fetch_assoc();
            return $row['username'];
        }
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