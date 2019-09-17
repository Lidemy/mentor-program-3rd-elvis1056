<?php
    include_once('./conn.php');
    include_once('./check_login.php');

    $parent_id = $_POST["parent_id"];
    $comment = $_POST["comment"];

    $sql = "INSERT INTO board_1(parent_id, nickname, content) VALUES ('$parent_id','$username', '$comment')";
    
    if ($conn->query($sql)) {
        header("Location: index.php");
    } else {
        echo "伺服器不穩定，請稍後再試";
    }

?>