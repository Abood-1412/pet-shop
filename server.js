const dotenv = require('dotenv');
const path = require('path') // for photos

dotenv.config();
require('./config/databse.js');
const express = require('express');





const app = express();

const methodOverride = require('method-override');
const morgan = require('morgan');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const isSignedIn = require('./middleware/is-signed-in.js');
const passUserToView = require('./middleware/pass-user-to-view.js');

// Controllers
const authController = require('./controllers/auth.js');
const PetsController = require('./controllers/pets.js');
// Set the port from environment variable or default to 3000
const PORT = process.env.PORT ? process.env.PORT : '3000';

// MIDDLEWARE
//
// Middleware to parse URL-encoded data from forms
app.use(express.urlencoded({ extended: false }));
// Middleware for using HTTP verbs such as PUT or DELETE
app.use(methodOverride('_method'));
// Morgan for logging HTTP requests
app.use(morgan('dev'));

// Session Storage with MongoStore
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI,
    }),
  })
);

// Add user variable to all templates
app.use(passUserToView);

app.use(express.static(path.join(__dirname, "public"))); // for photos



app.use('/auth', authController);
app.use('/pets', PetsController);
// PUBLIC
app.get('/pets', (req, res) => {
  res.render('index.ejs');
});
// PROTECTED


app.listen(PORT, () => {
  console.log(`The express app is ready on port ${PORT}!`);
});
