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
        "hora" int,
        "lugares" int,
        "mesa" int,
        "email" varchar(64)
        
    );`

const ADD_RESERVAS_DATA = `
    INSERT INTO RESERVAS (NOMECLIENTE, DATA, HORA, LUGARES, MESA, EMAIL)
    VALUES 
        ('Sr. João Pedro de Moura', '11-09-2022', 19, 4, 8, "primeirohenry@gmail.com"),
        ('Maria da Conceição', '11-09-2022', 21, 6, 15, "primeirohenry@gmail.com"),
        ('Joana Costa', '11-09-2022', 19, 2, 6, "primeirohenry@gmail.com"),
        ('Mariano Joaquim', '11-09-2022', 19, 5, 22, "primeirohenry@gmail.com"),
        ('João Gabriel', '12-09-2022', 19, 4, 1, "primeirohenry@gmail.com"),
        ('Maria Joana', '12-09-2022', 21, 6, 12, "primeirohenry@gmail.com"),
        ('Joana Frente', '12-09-2022', 19, 2, 14, "primeirohenry@gmail.com"),
        ('Mariana Joaquina', '12-09-2022', 19, 5, 2, "primeirohenry@gmail.com"),
        ('Pedro de Moura', '12-09-2022', 19, 4, 8, "primeirohenry@gmail.com"),
        ('Conceição', '12-09-2022', 21, 6, 15, "primeirohenry@gmail.com"),
        ('Acosta', '12-09-2022', 19, 2, 6, "primeirohenry@gmail.com"),
        ('Joaquim', '12-09-2022', 19, 5, 22, "primeirohenry@gmail.com"),
        ('Gabriel', '12-09-2022', 19, 4, 4, "primeirohenry@gmail.com"),
        ('Joana', '12-09-2022', 21, 6, 11, "primeirohenry@gmail.com"),
        ('Frota', '12-09-2022', 19, 2, 13, "primeirohenry@gmail.com"),
        ('Mariana', '12-09-2022', 19, 5, 3, "primeirohenry@gmail.com"),

        ('Sr. João Pedro de Moura', '13-09-2022', 19, 4, 8, "primeirohenry@gmail.com"),
        ('Maria da Conceição', '13-09-2022', 21, 6, 15, "primeirohenry@gmail.com"),
        ('Joana Costa', '13-09-2022', 19, 2, 6, "primeirohenry@gmail.com"),
        ('Mariano Joaquim', '13-09-2022', 19, 5, 22, "primeirohenry@gmail.com"),
        ('João Gabriel', '13-09-2022', 19, 4, 1, "primeirohenry@gmail.com"),
        ('Maria Joana', '13-09-2022', 21, 6, 12, "primeirohenry@gmail.com"),
        ('Joana Frente', '13-09-2022', 19, 2, 14, "primeirohenry@gmail.com"),
        ('Mariana Joaquina', '13-09-2022', 19, 5, 2, "primeirohenry@gmail.com"),

        ('Pedro de Moura', '13-09-2022', 19, 4, 9, "primeirohenry@gmail.com"),
        ('Conceição', '13-09-2022', 21, 6, 16, "primeirohenry@gmail.com"),
        ('Acosta', '13-09-2022', 19, 2, 7, "primeirohenry@gmail.com"),
        ('Joaquim', '13-09-2022', 19, 5, 23, "primeirohenry@gmail.com"),
        ('Gabriel', '13-09-2022', 19, 4, 5, "primeirohenry@gmail.com"),
        ('Joana', '13-09-2022', 21, 6, 11, "primeirohenry@gmail.com"),
        ('Frota', '13-09-2022', 19, 2, 13, "primeirohenry@gmail.com"),
        ('Mariana', '13-09-2022', 19, 5, 3, "primeirohenry@gmail.com"),

        ('Sr. João Pedro de Moura', '14-09-2022', 19, 4, 8, "primeirohenry@gmail.com"),
        ('Maria da Conceição', '14-09-2022', 21, 6, 15, "primeirohenry@gmail.com"),
        ('Joana Costa', '14-09-2022', 19, 2, 6, "primeirohenry@gmail.com"),
        ('Mariano Joaquim', '14-09-2022', 19, 5, 22, "primeirohenry@gmail.com"),
        ('João Gabriel', '14-09-2022', 19, 4, 1, "primeirohenry@gmail.com"),
        ('Maria Joana', '14-09-2022', 21, 6, 12, "primeirohenry@gmail.com"),
        ('Joana Frente', '14-09-2022', 19, 2, 14, "primeirohenry@gmail.com"),
        ('Mariana Joaquina', '14-09-2022', 19, 5, 2, "primeirohenry@gmail.com"),
        ('Pedro de Moura', '14-09-2022', 19, 4, 9, "primeirohenry@gmail.com"),
        ('Conceição', '14-09-2022', 21, 6, 16, "primeirohenry@gmail.com"),
        ('Acosta', '14-09-2022', 19, 2, 7, "primeirohenry@gmail.com"),
        ('Joaquim', '14-09-2022', 19, 5, 23, "primeirohenry@gmail.com"),
        ('Gabriel', '14-09-2022', 19, 4, 5, "primeirohenry@gmail.com"),
        ('Joana', '14-09-2022', 21, 6, 11, "primeirohenry@gmail.com"),
        ('Frota', '14-09-2022', 19, 2, 13, "primeirohenry@gmail.com"),
        ('Mariana', '14-09-2022', 19, 5, 3, "primeirohenry@gmail.com"),

        ('Sr. João Pedro de Moura', '15-09-2022', 19, 4, 8, "primeirohenry@gmail.com"),
        ('Maria da Conceição', '15-09-2022', 21, 6, 12, "primeirohenry@gmail.com"),
        ('Joana Costa', '15-09-2022', 19, 2, 6, "primeirohenry@gmail.com"),
        ('Mariano Joaquim', '15-09-2022', 19, 5, 22, "primeirohenry@gmail.com"),
        ('João Gabriel', '15-09-2022', 19, 4, 1, "primeirohenry@gmail.com"),
        ('Maria Joana', '15-09-2022', 21, 6, 12, "primeirohenry@gmail.com"),
        ('Joana Frente', '15-09-2022', 19, 2, 14, "primeirohenry@gmail.com"),
        ('Mariana Joaquina', '15-09-2022', 19, 5, 2, "primeirohenry@gmail.com"),
        ('Pedro de Moura', '15-09-2022', 19, 4, 9, "primeirohenry@gmail.com"),
        ('Conceição', '15-09-2022', 21, 6, 16, "primeirohenry@gmail.com"),
        ('Acosta', '15-09-2022', 19, 2, 7, "primeirohenry@gmail.com"),
        ('Joaquim', '15-09-2022', 19, 5, 23, "primeirohenry@gmail.com"),
        ('Gabriel', '15-09-2022', 19, 4, 5, "primeirohenry@gmail.com"),
        ('Joana', '15-09-2022', 21, 6, 11, "primeirohenry@gmail.com"),
        ('Frota', '15-09-2022', 19, 2, 13, "primeirohenry@gmail.com"),
        ('Mariana', '15-09-2022', 19, 5, 3, "primeirohenry@gmail.com"),

        
        ('Sr. João Pedro de Moura', '16-09-2022', 19, 4, 8, "primeirohenry@gmail.com"),
        ('Maria da Conceição', '16-09-2022', 21, 6, 12, "primeirohenry@gmail.com"),
        ('Joana Costa', '16-09-2022', 19, 2, 6, "primeirohenry@gmail.com"),
        ('Mariano Joaquim', '16-09-2022', 19, 5, 22, "primeirohenry@gmail.com"),
        ('João Gabriel', '16-09-2022', 19, 4, 1, "primeirohenry@gmail.com"),
        ('Maria Joana', '16-09-2022', 21, 6, 12, "primeirohenry@gmail.com"),
        ('Joana Frente', '16-09-2022', 19, 2, 14, "primeirohenry@gmail.com"),
        ('Mariana Joaquina', '16-09-2022', 19, 5, 2, "primeirohenry@gmail.com"),
        ('Pedro de Moura', '16-09-2022', 19, 4, 9, "primeirohenry@gmail.com"),
        ('Conceição', '16-09-2022', 21, 6, 16, "primeirohenry@gmail.com"),
        ('Acosta', '16-09-2022', 19, 2, 7, "primeirohenry@gmail.com"),
        ('Joaquim', '16-09-2022', 19, 5, 23, "primeirohenry@gmail.com"),
        ('Gabriel', '16-09-2022', 19, 4, 5, "primeirohenry@gmail.com"),
        ('Joana', '16-09-2022', 21, 6, 11, "primeirohenry@gmail.com"),
        ('Frota', '16-09-2022', 19, 2, 13, "primeirohenry@gmail.com"),
        ('Mariana', '16-09-2022', 19, 5, 3, "primeirohenry@gmail.com"),

        
        ('Sr. João Pedro de Moura', '17-09-2022', 19, 4, 8, "primeirohenry@gmail.com"),
        ('Maria da Conceição', '17-09-2022', 21, 6, 12, "primeirohenry@gmail.com"),
        ('Joana Costa', '17-09-2022', 19, 2, 6, "primeirohenry@gmail.com"),
        ('Mariano Joaquim', '17-09-2022', 19, 5, 22, "primeirohenry@gmail.com"),
        ('João Gabriel', '17-09-2022', 19, 4, 1, "primeirohenry@gmail.com"),
        ('Maria Joana', '17-09-2022', 21, 6, 12, "primeirohenry@gmail.com"),
        ('Joana Frente', '17-09-2022', 19, 2, 14, "primeirohenry@gmail.com"),
        ('Mariana Joaquina', '17-09-2022', 19, 5, 2, "primeirohenry@gmail.com"),
        ('Pedro de Moura', '17-09-2022', 19, 4, 9, "primeirohenry@gmail.com"),
        ('Conceição', '17-09-2022', 21, 6, 16, "primeirohenry@gmail.com"),
        ('Acosta', '17-09-2022', 19, 2, 7, "primeirohenry@gmail.com"),
        ('Joaquim', '17-09-2022', 19, 5, 23, "primeirohenry@gmail.com"),
        ('Gabriel', '17-09-2022', 19, 4, 5, "primeirohenry@gmail.com"),
        ('Joana', '17-09-2022', 21, 6, 11, "primeirohenry@gmail.com"),
        ('Frota', '17-09-2022', 19, 2, 13, "primeirohenry@gmail.com"),
        ('Mariana', '17-09-2022', 19, 5, 3, "primeirohenry@gmail.com")
        
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