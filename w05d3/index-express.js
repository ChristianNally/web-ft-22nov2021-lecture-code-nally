require('dotenv').config()
const pg = require('pg');
const express = require('express');
const PORT = 8181;
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));

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

// BROWSE

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

// READ

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

// EDIT
app.get('/edit/:id', (req,res) => {
  const id = req.params.id;
  client.query(`SELECT id,question,answer FROM objectives WHERE id = $1;`, [id])
  .then((response) => {
    const templateVars = {
      objective: response.rows[0]
    };
    res.render('edit', templateVars);
  })
  .catch((error) => {
    console.log('BROWSE Error:', error);
    res.send('BROWSE Error:' + error);
  });

});

app.post('/edit/:id', (req,res) => {
// TOOD add the query that would INSERT the new FORM data
});


// ADD

app.get('/add', (req,res) => {
  res.render('add');
});

app.post('/add', (req,res) => {
  const newQuestion = req.body.question;
  const newAnswer = req.body.answer;

  client.query(`INSERT INTO objectives (question, answer) VALUES ($1, $2)`,[newQuestion, newAnswer])
  .then((response) => {
    console.log('response: ',response);
    res.redirect('/');
  })
  .catch((error) => {
    console.log('add error: ',error);
  });
});

// DELETE
app.get('/delete/:id', (req,res) => {
  client.query(`DELETE FROM objectives WHERE id = $1;`,[req.params.id])
  .then((response) => {
    console.log('response: ',response);
    res.redirect('/');
  })
  .catch((error) => {
    console.log('add error: ',error);
  });
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});