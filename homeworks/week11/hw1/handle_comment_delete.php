<?php
    include_once('./conn.php');
    include_once('./check_login.php');

    $comment_id = $_POST['comment_id'];

    $sql = "DELETE FROM board_1 WHERE id='$comment_id' or parent_id='$comment_id'";
    if ($conn->query($sql)) {
        header("Location: index.php");
    } else {
        echo '伺服器似乎發生錯誤，請稍候在試';
    }

?>