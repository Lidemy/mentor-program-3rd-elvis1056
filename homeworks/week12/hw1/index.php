<?php
    include_once('./conn.php');
    include_once('./check_login.php');
    include_once('./utils.php');
    if (isset($_GET['page'])) {
      $page = $_GET['page'];
    } else {
      $page = 1;
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
          <?php
            if ($username) {
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
      if ($username) {
      ?>
      
      <form class="board-write" method="POST" action="./handle_comment.php">
        <div class="board-name"><?php echo $username ?></div>
        <textarea class="board-write-text" name="comment" id="" cols="30" rows="10"></textarea>
        <div class="padding-top-30 padding-bottom-30">
        <input type="hidden" name="parent_id" value="0">
        <input class="board-btn" type="submit" value="submit" />
        </div>
      </form>

      <?php
      }

      $sql_countPage = "SELECT count(*) as count FROM board_1 WHERE parent_id=0";
      $result_countPage = $conn->query($sql_countPage);
      if ($result_countPage) {
        $count = $result_countPage->fetch_assoc()['count'];
        $limit_page = 3;
        $total_page = ceil($count / $limit_page);
        echo '<div class="pages margin-top-10">';
        for ($i = 1; $i<=$total_page; $i++) {
          echo '<a class="page" href="./index.php?page=' . $i . '">' . $i . '</a>';
        }
        echo '</div>';
      };

      ?>

      <?php
      $sql = "SELECT * FROM board_1 WHERE parent_id=0 ORDER BY id DESC limit " . ($page-1)*3 . ", 3";
      $result = $conn->query($sql);
      
      if ($result) {
        while ($row = $result->fetch_assoc()) {
      ?>   

      <div class="comments margin-top-20 relative">
        <div class="comment-id"><?php echo escape($row['nickname'])?></div>
        <div class="comment-content"><?php echo escape($row['content'])?></div>
        <?php
          if ($username === $row['nickname']) {
            echo renderEditBtn($row['id']);
            echo renderDeleteBtn($row['id']);
          }
          $sub_sql = "SELECT * FROM board_1 WHERE parent_id=" . $row['id'];
          $sub_result = $conn->query($sub_sql);
          if ($sub_result) {
            while ($sub_row = $sub_result->fetch_assoc()) {
        ?>
          <div class="sub_comments margin-top-10 relative">
            <?php
              if ($username === $sub_row['nickname']) {
                echo renderEditBtn($sub_row['id']);
                echo renderDeleteBtn($sub_row['id']);
              }
            ?>
            <div class="sub_comment-id"><?php echo escape($sub_row['nickname'])?></div>
            <div class="sub_comment-content"><?php echo escape($sub_row['content'])?></div>
          </div>
        <?php

            }
          }
        ?>
            <form class="sub-board-write" method="POST" action="./handle_sub_comment.php">
              <div style="margin: 0 20px;">
                <div class="sub-board-name"><?php echo $username ?></div>
                <textarea class="sub-board-write-text" name="sub_comment"></textarea>
                <div class="padding-top-15 padding-bottom-15">
                <input type="hidden" name="parent_id" value="<?php echo $row['id'] ?>" > 
                <input class="sub-board-btn" type="submit" value="submit" />
                </div>
              </div>
            </form>
      </div>

      <?php
          }
        }
      ?>
      
      <?php
      if ($result_countPage) {
        echo '<div class="pages margin-top-30 margin-bottom-30">';
        for ($j = 1; $j<=$total_page; $j++) {
          echo '<a class="page" href="./index.php?page=' . $j . '">' . $j . '</a>';
        }
        echo '</div>';
      };
      ?>
    </div>
  </div>
</body>

</html>