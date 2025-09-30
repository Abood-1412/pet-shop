const express = require('express');
const router = express.Router();

const Pets = require('../models/pets');
const User = require('../models/user');

/* ----------------------------------- ROUTES ------------------------------------------- */
// Default page for users an admins
router.get('/', async (req, res) => {
  try{
    res.render('Pets/index.ejs');
  } catch (error){
    console.log(error);
    res.redirect('/');
  }
});

// render create item page
router.get('/new_pet', async (req, res) => {
  try{
      res.render('Pets/new_pet.ejs');
  } catch (error){
    console.log(error);
    res.redirect('/');
  }
});

module.exports = router;