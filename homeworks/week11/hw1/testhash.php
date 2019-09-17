<?php
    $password = "123456789";
    $hash = password_hash($password, PASSWORD_DEFAULT);
    echo $hash;
?>
<?php
    if (password_verify('123456789', $hash)){
        echo 'true';
    } else {
        echo 'false';
    }
?>