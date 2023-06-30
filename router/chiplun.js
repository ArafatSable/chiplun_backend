const express = require("express");
const Touristplaces = require("../models/touristplaces");
const Restuarants = require("../models/restuarants");
const Hospital = require("../models/hospital");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authenticate = require('../middleware/authenticate')
const router = express.Router();
const cors = require('cors');

require("../db/connect");

// Enable CORS
router.use(cors());

// about us page

router.get('/touristplaces', async (req, res) => {
  try {
    const touristplaces = await Touristplaces.find();
    res.json(touristplaces);
   
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.get('/restuarants', async (req, res) => {
  try {
    const restuarants = await Restuarants.find();
    res.json(restuarants);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.get('/hospital', async (req, res) => {
  try {
    const hospital = await Hospital.find();
    res.json(hospital);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.get('/touristplaces/:id', async (req, res) => {
  try {
    const touristplaces = await Touristplaces.findById(req.params.id);
    res.json(touristplaces);
    console.log(touristplaces)
  } catch (err) {
    console.log("cannot find dog with particular id");
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.get('/restuarants/:id', async (req, res) => {
  try {
    console.log("Data of cat is received");
    const restuarants = await Restuarants.findById(req.params.id);
    console.log("restuarants found");
    res.json(restuarants);
  } catch (err) {
    console.log("cannot find Cat with particular id");
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.get('/hospital/:id', async (req, res) => {
  try {
    const hospital = await Hospital.findById(req.params.id);
    res.json(hospital);
  } catch (err) {
    console.log("cannot find Fish with particular id");
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// middleware
const middleware = (req, res, next) => {
  console.log("Helloworld");
  next();
};

router.use(middleware);

module.exports = router;
