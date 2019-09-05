<?php

    include_once('./conn.php');

    $nickname = $_POST["nickname"];
    $account = $_POST["account"];
	$password = $_POST["password"];
    
    if ($nickname !== '' && $account !== '' && $password !=='') {
        $sql = "INSERT INTO board_register (nickname, account, password) VALUES ('$nickname', '$account', '$password')";
        $conn->query($sql);
        $conn->close();
        header("Location: index.php");
    } else {
        $sql = "INSERT INTO board_register (nickname, account, password) VALUES ('$nickname', '$account', '$password')";
        echo 'error: ' . $sql . '<br>' . $conn->error;
    }

?>