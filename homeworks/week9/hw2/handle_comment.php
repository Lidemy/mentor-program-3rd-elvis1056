<?php
    include_once('./conn.php');
    include_once('./check_login.php');

    $account = $_COOKIE['account'];
    $comment = $_POST["comment"];

    $sql = "INSERT INTO elvis1056_board_comment_week9 (nickname, content) VALUES ('$account', '$comment')";

    if ($conn->query($sql)) {
        header("Location: index.php");
    } else {
        echo "伺服器不穩定，請稍後再試";
    }

?>