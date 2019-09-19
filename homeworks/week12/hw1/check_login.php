<?php
    session_start();
    include_once('./conn.php');
    include_once('./utils.php');
    
    $username = $_SESSION['nickname'];
?>