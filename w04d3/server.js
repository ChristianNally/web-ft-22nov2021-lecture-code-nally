const express = require('express');
const PORT = 3232;

const app = express();
app.set('view engine','ejs');

app.use(express.static('public')); // serve static files from the public dir

app.get('/', (req,res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});