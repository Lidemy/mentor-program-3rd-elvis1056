<?php
    include_once('./conn.php');
    include_once('./utils.php');
    
    if (isset($_COOKIE['token']) && !empty($_COOKIE['token'])) {
        $token = $_COOKIE['token'];
        getUsernameByToken($conn, $token);
        $username = getUsernameByToken($conn, $token);
    } else {
        $token = null;
        getUsernameByToken($conn, $token);
        $username = getUsernameByToken($conn, $token);
    }
?>