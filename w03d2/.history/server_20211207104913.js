const PORT = 8087;
const express = require('express');

const app = express();

//
// ROUTES
//

app.get('/', (req,res) => {
  res.render('home');
});

//
// CREATE
//

//
// READ
//

//
// UPDATE
//

//
// DELETE
//

app.listen(PORT, () => {
  console.log(`Server is listening on port=${PORT}`);
});
