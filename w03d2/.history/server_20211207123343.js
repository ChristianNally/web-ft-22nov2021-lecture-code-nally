const PORT = 8087;
const express = require('express');
const morgan = require("morgan");
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
app.use(morgan("dev"));

//
// ROUTES (these run when the first matching route is found)
//

//
// ADD
//

app.get('/objectives/add', (req,res) => {
  res.render('add');
});

app.post('/objectives/add', (req,res) => {
  console.log('adding req.body',req.body);
  const newQuestion = req.body.question;
  const newAnswer = req.body.answer;

  objectives.push({question: newQuestion, answer: newAnswer});
  res.redirect('/');
});

// BROWSE

app.get('/', (req,res) => {
  console.log('Monkey Fuzz!');
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

  if(objectives[id]){
    const templateVars = {
      objective: objectives[id]
    };
    res.render('detail', templateVars);
  } else {
    res.status(404).write('No such objective.');
    res.end();
  }
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
