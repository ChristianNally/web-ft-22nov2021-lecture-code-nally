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

  // const templateVars = {
  //   listOfObjectives: objectives
  // };
  res.render('detail', templateVars);
});

//
// EDIT
//

//
// ADD
//

//
// DELETE
//

app.listen(PORT, () => {
  console.log(`Server is listening on port=${PORT}`);
});
