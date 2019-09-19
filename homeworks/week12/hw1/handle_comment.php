<?php
    include_once('./conn.php');
    include_once('./check_login.php');

    $parent_id = $_POST["parent_id"];
    $comment = $_POST["comment"];

    $stmt = $conn->prepare("INSERT INTO board_1(parent_id, nickname, content) VALUES (?,?,?)");
    $stmt->bind_param("iss", $parent_id, $username, $comment);

    if ($stmt->execute()) {
        header("Location: index.php");
    } else {
        echo "伺服器不穩定，請稍後再試";
    }

?>