<?php
    include_once('./conn.php');
    include_once('./check_login.php');
    $iscomment_suc = false;
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
          <?php
            if ($account_check) {
          ?>
              <a href="./logout.php" class="nav-item">登出</a>
          <?php
            } else {
          ?>
              <a href="./login.php" class="nav-item">登入</a>
              <a href="./register.php" class="nav-item">註冊</a>
          <?php
            }
          ?>
        </ul>
      </div>
    </div>
    <div class="container">
      <div class="title">Comments Board</div>

      <?php
      if ($account_check) {
      ?>
      <form class="board-write" method="POST" action="./handle_comment.php">
        <div class="board-name"><?php echo $_COOKIE['nickname'] ?></div>
        <textarea class="board-write-text" name="comment" id="" cols="30" rows="10"></textarea>
        <div class="padding-top-30 padding-bottom-30">
          <input class="board-btn" type="submit" value="submit" />
        </div>
      </form>
      <?php
      }
      ?>

      <?php
        $sql = "SELECT * FROM elvis1056_board_comment_week9 ORDER BY id DESC";
        $result = $conn->query($sql);
        
        if ($result) {
          while ($row = $result->fetch_assoc()) {
      ?>   
      <div class="comments margin-top-20">
        <div class="comment-id"><?php echo $row['nickname']?></div>
        <div class="comment-content"><?php echo $row['content']?></div>
      </div>
      <?php
          }
        }
      ?>
      
      <div class="comments margin-top-20">
        <div class="comment-id">正妹</div>
        <div class="comment-content">馬克馬麗 青春點點點 推推推!!!!</div>
      </div>
    </div>
  </div>
</body>

</html>