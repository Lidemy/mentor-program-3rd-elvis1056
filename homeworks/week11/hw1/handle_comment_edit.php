<?php
    include_once('./conn.php');
    include_once('./check_login.php');

    $id = $_POST["id"];
    $comment = $_POST["comment"];

    $sql = "UPDATE board_1 SET content='$comment' WHERE id='$id'";

    if ($conn->query($sql)) {
        header("Location: index.php");
    } else {
        echo "伺服器不穩定，請稍後再試";
    }

?>