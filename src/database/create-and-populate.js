import sqlite3 from "sqlite3";
import {
    dirname
} from "path";
import {
    fileURLToPath
} from "url";
sqlite3.verbose();
const filePath = dirname(fileURLToPath(
    import.meta.url)) + "/database.db";
const db = new sqlite3.Database(filePath)

const RESERVAS_SCHEMA = `
    CREATE TABLE IF NOT EXISTS "RESERVAS" (
        "idReserva" INTEGER PRIMARY KEY AUTOINCREMENT,
        "nomeCliente" varchar(64),
        "data" varchar(64),
        "hora" TIME,
        "lugares" int,
        "email" varchar(64)
        
    );`

const ADD_RESERVAS_DATA = `
    INSERT INTO RESERVAS (NOMECLIENTE, DATA, HORA, LUGARES, EMAIL)
    VALUES 
        ('Sr. João Pedro de Moura', '11-09-2022', 19, 4, "primeirohenry@gmail.com"),
        ('Maria da Conceição', '11-09-2022', 21, 6, "mariaconceicao@gmail.com"),
        ('Joana Costa', '11-09-2022', 19, 2, "joanacosta1@gmail.com"),
        ('Mariano Joaquim', '11-09-2022', 19, 5, "mariojoaquim@gmail.com"),
        ('João Gabriel', '12-09-2022', 19, 4, "joaogabriel@gmail.com"),
        ('Maria Joana', '12-09-2022', 21, 6, "mariajoana1@gmail.com"),
        ('Joana Frente', '12-09-2022', 19, 2, "joanafrente@gmail.com"),
        ('Mariana Joaquina', '12-09-2022', 19, 5, "marianajoaquina@gmail.com"),
        ('Pedro de Moura', '12-09-2022', 19, 4, "pedromourinha@gmail.com"),
        ('Conceição', '12-09-2022', 21, 6, "conceicaoconceicao24@gmail.com"),
        ('Teste', '12-09-2022', 21, 6, "teste@gmail.com")
        `

function criaTabelaReservas() {
    db.run(RESERVAS_SCHEMA, (error) => {
        if (error) console.log("Erro ao criar tabela de reservas");
    });
}


function populaTabelaReservas() {
    db.run(ADD_RESERVAS_DATA, (error) => {
        if (error) console.log("Erro ao popular tabela de reservas");
    });
}

db.serialize(() => {
    criaTabelaReservas();
    populaTabelaReservas();
});