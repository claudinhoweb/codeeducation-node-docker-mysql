const express = require('express')
const app = express()
const faker = require('faker')

const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};

const mysql = require('mysql')

app.get('/', (req,res) => {
    const names = getNames(res);
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})

function getNames(res) {
    const connection = mysql.createConnection(config)

    insertName(connection)

    const sql = `SELECT nome FROM people`;
    connection.query(sql, (error, results, fields) => {
        if (error) {
            throw error
        };

        let content = '<ul>';

        for(let people of results) {
            content += '<li>'+people.nome+'</li>'
        }

        content += '</ul>';

        res.send('<h1>Full Cycle Rocks!</h1>' + content)
    });

    connection.end();
}

function insertName(connection) {
    const name = faker.name.findName()
    const sql = `INSERT INTO people(nome) values('${name}')`
    connection.query(sql)

    console.log(`${name} inserido no banco!`)
}
