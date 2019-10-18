<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PATCH,DELETE,PUT");

require_once('./conn.php');
require_once('./utils.php');

$request_method=$_SERVER["REQUEST_METHOD"];

switch($request_method) {
    case 'GET';
        if (isset($_GET['todo_id']) && !empty($_GET['todo_id'])){
            // 讀取單一 todo
            $todo_id = $_GET['todo_id'];
            GetTodo($conn, $todo_id);
        } else {
            // 獲取所有 todo 
            GetAllTodo($conn);
        }
        break;
    case 'POST';
        CreateTodo($conn, $_POST['content']);
        break;
    case 'PATCH';
        if (isset($_GET['check'])){
            $todo_id = $_GET['todo_id'];
            $check = $_GET['check'];
            UpdateTodo($conn, $todo_id, $check);
        } else {
            $todo_id = $_GET['todo_id'];
            parse_str(file_get_contents('php://input'), $_PATCH);
            $content = $_PATCH['content'];
            editTodo($conn, $todo_id, $content);
        }
        break;
    case 'DELETE';
        $todo_id = $_GET['todo_id'];
        DeleteTodo($conn, $todo_id);
        break;
}

?>