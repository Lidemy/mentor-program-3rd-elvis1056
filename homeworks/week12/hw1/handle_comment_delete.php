<?php
    include_once('./conn.php');
    include_once('./check_login.php');

    $comment_id = $_POST['comment_id'];

    $sql = "DELETE FROM board_1 WHERE (id='$comment_id' or parent_id='$comment_id') AND nickname='$username'";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("iis", $comment_id, $comment_id, $username);
    $stmt->execute();

    if ($stmt->execute()) {
        header("Location: index.php");
    } else {
        echo "伺服器不穩定，請稍後再試";
    }

?>