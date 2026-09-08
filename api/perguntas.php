<?php

require_once "config/database.php";

header("Content-Type: application/json; charset=utf-8");


if (!isset($_GET["id_categoria"])) {

    echo json_encode([
        "erro" => "Informe o id da categoria"
    ]);

    exit;
}


$idCategoria = $_GET["id_categoria"];


$sql = "SELECT id_pergunta, pergunta
        FROM tb_pergunta
        WHERE id_categoria = :id_categoria
        AND ativa = TRUE
        ORDER BY id_pergunta";


$stmt = $conexao->prepare($sql);

$stmt->bindParam(":id_categoria", $idCategoria, PDO::PARAM_INT);

$stmt->execute();


$perguntas = $stmt->fetchAll(PDO::FETCH_ASSOC);


echo json_encode(
    $perguntas,
    JSON_UNESCAPED_UNICODE
);