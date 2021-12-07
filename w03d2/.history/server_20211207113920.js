const PORT = 8087;
const express = require('express');

const app = express();
app.set('view engine', 'ejs');


const objectives = [
  {question: "Why EJS Templates?", answer: "We use templates to separate business logic from the presentation layer."},
  {question: "How do we implement EJS Templates?", answer: "npm i ejs, mkdir views, app.set('view engine', 'ejs');"},
  {question: "What does CRUD stand for?", answer: "Create, Read, Update, Delete"},
  {question: "Where are URL parameters stored?", answer: "req.params"},
  {question: "Where are <form> values stored?", answer: "req.body"}
];

//
// ROUTES
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
  res.render('home', templateVars);
});

//
// ADD
//

//
// DELETE
//

app.listen(PORT, () => {
  console.log(`Server is listening on port=${PORT}`);
});
