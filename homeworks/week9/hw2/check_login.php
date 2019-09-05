<?php
    if (isset($_COOKIE['account']) && !empty($_COOKIE['account'])) {
        $account_check = true;
        $account = $_COOKIE['account'];
        // $nickname = $_COOKIE['nickname'];
    } else {
        $account_check = false;
    }
?>