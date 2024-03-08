const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");

async function createUserTable() {
    try {
        const connection = await mysql.createConnection(databaseConfig);

        await connection.query(`USE ${databaseConfig.database}`);
        await connection.query(`CREATE TABLE IF NOT EXISTS user (
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) not null,
            password VARCHAR(255) not null,
            email VARCHAR(255) not null
        )`)
        await connection.end();

        console.log("Table user created")
    } catch (error) {
        console.log(`error creating table user ${error}`);
    }
}
createUserTable();