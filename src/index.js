// npm init +
// download express +
// download ejs+
// pasikurt pradini server
const express = require('express');
const app = express();
// itraukiamas mongoose
const mongoose = require('mongoose');
// istraukiamas mongoDB mano clusterio credentials
const { mongoDbString } = require('./config/config');

console.log('mongoDBstring:', mongoDbString);
// prisijungimas prie DB
mongoose.connect(mongoDbString);

// paleidzia serveri ir klausosi http ir kt requestu nurodytu portu
app.listen(3000, () => console.log('server is running'));

//add as view engine
app.set('view engine', 'ejs');
app.set('views', 'src/views');
// pasileidziam serveri
app.get('/', (req, res) => res.render('index'));
//create views folder+
//vienas index view kuri sugeneruojam
