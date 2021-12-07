const PORT = 8087;
const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');

//
// DATA
//
const objectives = [
  {question: "Why EJS Templates?", answer: "We use templates to separate business logic from the presentation layer."},
  {question: "How do we implement EJS Templates?", answer: "npm i ejs, mkdir views, app.set('view engine', 'ejs');"},
  {question: "What does CRUD stand for?", answer: "Create, Read, Update, Delete"},
  {question: "Where are URL parameters stored?", answer: "req.params"},
  {question: "Where are <form> values stored?", answer: "req.body"}
];

//
// MIDDLEWARE (runs for every request)
//
app.use(bodyParser.urlencoded({extended: false})); // 

//
// ROUTES (these run when the first matching route is found)
//

// BROWSE

app.get('/', (req,res) => {
  const templateVars = {
    listOfObjectives: objectives
  };
  res.render('home', templateVars);
});

//
// READ
//
app.get('/objectives/:id', (req,res) => {

  console.log('req.params',req.params);
  const id = req.params.id;

  const templateVars = {
    objective: objectives[id]
  };
  res.render('detail', templateVars);
});

//
// EDIT
//
app.get('/objectives/edit/:id', (req,res) => {
  const id = req.params.id;

  const templateVars = {
    id: id,
    objective: objectives[id]
  };
  res.render('edit', templateVars);
});

app.post('/objectives/edit/:id', (req,res) => {
  const id = req.params.id;
  console.log('req.body',req.body);
  const newQuestion = req.body.question;
  const newAnswer = req.body.answer;

  objectives[id] = {question: newQuestion, answer: newAnswer};
  res.redirect('/');
});

//
// ADD
//

//
// DELETE
//

app.get('/objectives/:id/delete', (req,res) => {
  const id = req.params.id;
  delete objectives[id];
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port=${PORT}`);
});
