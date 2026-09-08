<?php
require_once __DIR__ . "/config/database.php";

$sql = "SELECT id_categoria, nome, icone
        FROM tb_categoria
        ORDER BY id_categoria";

$stmt = $conexao->prepare($sql);

$stmt->execute();

$categorias = $stmt->fetchAll(PDO::FETCH_ASSOC);

header("Content-Type: application/json; charset=utf-8");

echo json_encode($categorias, JSON_UNESCAPED_UNICODE);
