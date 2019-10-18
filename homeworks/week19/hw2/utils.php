<?php

function GetAllTodo($conn){
    $sql = "SELECT * FROM testTodoAPI";
    $result = $conn->query($sql);
    if ($result) {
        while ($row = $result->fetch_assoc()) {
            // print_r(getType($row)); ---- array
            $res[] = $row;
        }
        echo json_encode($res, JSON_UNESCAPED_UNICODE);
    }
}

function GetTodo($conn, $id){
    $id = intval($id);
    $sql = "SELECT * FROM testTodoAPI WHERE id=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);
    if($stmt->execute()) {
        $result = $stmt->get_result();
        $row = $result->fetch_assoc();
        echo json_encode($row);
    }
}

function CreateTodo($conn, $content){
    $type = 0;
    $sql = "INSERT INTO testTodoAPI (todo, type) VALUES (?,?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("si", $content, $type);
    if($stmt->execute()){
        echo 'true';
    } else {
        echo 'false';
    }
}

function UpdateTodo($conn, $todo_id, $check){
    $todo_id = intval($todo_id);
    $sql = "UPDATE testTodoAPI SET type=? WHERE id=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ii", $check, $todo_id);
    if($stmt->execute()){
        echo 'true';
    } else {
        echo 'false';
    }
}

function DeleteTodo($conn, $todo_id){
    $id = intval($todo_id);
    $sql = "DELETE FROM testTodoAPI WHERE id=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);
    if($stmt->execute()){
        echo 'true';
    } else {
        echo 'false';
    }
}

function editTodo($conn, $todo_id, $content){
    $todo_id = intval($todo_id);
    $sql = "UPDATE testTodoAPI SET todo=? WHERE id=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("si", $content, $todo_id);
    if($stmt->execute()){
        echo 'true';
    } else {
        echo 'false';
    }
}

?>