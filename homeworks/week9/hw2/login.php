<?php

include_once('./conn.php');

$is_error = false;

if (isset($_POST["account"]) &&
    isset($_POST["password"]) &&
    !empty($_POST["account"]) &&
    !empty($_POST["password"])) 
    {
      $account = $_POST["account"];
      $password = $_POST["password"];

      $sql = "SELECT * FROM elvis1056_board_register_week9 WHERE account='$account' and password='$password'";
      $result = $conn->query($sql);
      if ($result->num_rows <= 0) {
        $is_error = true;
      } else {
        $row = $result->fetch_assoc();
        $nickname = $row['nickname'];
        setcookie("account",$account, time()+3600*24);
        setcookie("nickname", $nickname, time()+3600*24);
        header("Location: index.php");
      }
}

?>
<!DOCTYPE html>
<html>

<head>
  <title>week8.hw</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="./style.css">
  <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
</head>

<body>
  <div>
    <div class="navbar">
      <div class="nav-title margin-left-15">Message Board</div>
      <div>
        <ul class="nav-items">
          <a href="./register.php" class="nav-item">註冊</a>
        </ul>
      </div>
    </div>
    <div class="container">
      <div class="title">Login your Account</div>

      <form class="register padding-top-30" method="POST" action="./login.php" >
        <div>帳號：
            <input id="account" name="account" placeholder="Account" type="text">
        </div>
        <div class="padding-top-30">密碼：
            <input id="password" name="password" placeholder="Password" type="password">
        </div>
        <div class="padding-top-30 padding-bottom-30">
          <input class="board-btn" type="submit" value="submit" />
        </div>
        <?php
          if ($is_error) {
            echo '<div>帳號或密碼錯誤</div>';
          }
        ?>
      </form>

    </div>
  </div>
</body>

</html>