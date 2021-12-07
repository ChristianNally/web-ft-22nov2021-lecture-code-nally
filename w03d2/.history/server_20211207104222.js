const PORT = 8087;
const express = require('npm');

const app = express();

//
// ROUTES
//

app.get('/', (req,res) => {
  console.log("homepage was requested");
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
