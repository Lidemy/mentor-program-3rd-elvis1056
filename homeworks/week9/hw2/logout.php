<?php
    setcookie("account", '', time()+3600*24);
    header("Location: index.php");
?>