const express = require('express');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const PORT = 8088;

const app = express();
app.set("view engine", "ejs");

//
// DATA
//
const users = [
  {email: 'nally@example.com', password: 'test'}
];

const getUserByEmail = (email) => {

  const returnUser = {};

  users.forEach((testUser) => {
    if (testUser.email === email) {
      returnUser.email = email;
      returnUser.password = testUser.password;
    }
  });

  return returnUser;
};

//
// MIDDLEWARE
//
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//
// ROUTES (req, res) => {}
//
app.get("/", (req,res) => {
  const user = getUserByEmail(req.cookies.user_email);
  const templateVars = {
    user: user
  };
  res.render('home', templateVars);
});

// registration routes
app.get("/registration", (req, res) => {
  const user = getUserByEmail(req.cookies.user_email);
  const templateVars = {
    user: user
  };
  res.render('registration', templateVars);
});

app.post("/registration", (req, res) => {
  const newEmail = req.body.email;
  const newPassword = req.body.password;

  users.push({email: newEmail, password: newPassword});
  console.log('users',users);
  res.redirect('/');
});

// login/logout routes
app.get("/login", (req, res) => {
  res.render('login');
});

app.post("/login", (req, res) => {
  const candidateEmail = req.body.email;
  const candidatePassword = req.body.password;

  users.forEach((testUser) => {
    if (testUser.email === candidateEmail) {
      if (testUser.password === candidatePassword) {
        console.log('Found the user with the correct password');
        // SET A COOKIE
        res.cookie('user_email',candidateEmail);
        res.redirect('/');
      } else {
        console.log('wrong password');
        res.write('wrong password');
        res.end();
      }
    }
  });
});

app.get("/logout", (req, res) => {
  res.clearCookie("user_email");
  res.redirect('/');
});

app.get("/profile", (req, res) => {
  console.log('req.cookies',req.cookies);

  if(req.cookies.user_email){
    const user = getUserByEmail(req.cookies.user_email);
    const templateVars = {user: user};
    res.render('profile', templateVars);
  } else {
    console.log('not logged in');
    res.write('not logged in');
    res.end();
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening to port = ${PORT}`);
});