<?php

$host = "localhost";
$dbname = "quiz_biblico";
$username = "quiz_app";
$password = "senha_segura"; // Alterei a senha para uma mais segura


try {

    $conexao = new PDO(
        "mysql:host=$host;dbname=$dbname;charset=utf8mb4",
        $username,
        $password
    );

    $conexao->setAttribute(
        PDO::ATTR_ERRMODE,
        PDO::ERRMODE_EXCEPTION
    );

} catch (PDOException $erro) {

    die("Erro na conexão com o banco: " . $erro->getMessage());

}