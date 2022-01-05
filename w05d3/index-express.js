require('dotenv').config()
const pg = require('pg');
const express = require('express');
const PORT = 8181;
const app = express();

app.set('view engine', 'ejs');

const Client = pg.Client;

const configObj = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT
};

// console.log('db connection info:', configObj);

const client = new Client(configObj);

client.connect()
.then(() => {
  console.log('db connected');
})
.catch((error) => {
  console.log('db connection error:', error);
});

app.get('/',(req,res) => {

  client.query('SELECT id,question FROM objectives ORDER BY id;')
  .then((response) => {
    const templateVars = {
      objectives: response.rows
    };
    res.render('home',templateVars);
  })
  .catch((error) => {
    console.log('BROWSE Error:', error);
    res.send('BROWSE Error:' + error);
  });

});

app.get('/read/:id',(req,res) => {

  const id = req.params.id;

  client.query(`SELECT id,question,answer FROM objectives WHERE id = $1;`, [id])
  .then((response) => {
    const templateVars = {
      objective: response.rows[0]
    };
    res.render('read',templateVars);
  })
  .catch((error) => {
    console.log('BROWSE Error:', error);
    res.send('BROWSE Error:' + error);
  });

});



app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});