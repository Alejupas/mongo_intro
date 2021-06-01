// npm init +
// download express +
//create views folder+
// download ejs+
// pasikurt pradini server
const express = require('express');
const app = express();
// itraukiamas mongoose
const mongoose = require('mongoose');
// istraukiamas mongoDB mano clusterio credentials
const { mongoDbString } = require('./config/config');

const Post = require('./models/post');

// console.log('mongoDBstring:', mongoDbString);

//add as view engine
app.set('view engine', 'ejs');
app.set('views', 'src/views');

// prisijungimas prie DB
mongoose
  .connect(mongoDbString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log('Connected to Mongooooooose');
    app.listen(3000);
  })
  .catch((err) => console.error(err.message));

// paleidzia serveri ir klausosi http ir kt requestu nurodytu portu
// app.listen(3000, () => console.log('server is running'));

// pasileidziam serveri
app.get('/', (req, res) => res.render('index'));

app.get('/add-post', (req, res) => {
  // sukuriam nauja posta pagal schemoj aprasyta modeli
  const newPost = new Post({
    title: 'This is Mongoose Shark Attack',
    author: 'Mangustas Gustas Augustas',
    body: 'Mongo db is an easy way to do databasing',
  });
  // issaugoti duomenu bazeje naudojam .save()
  newPost.save();
  res.send('all good, maybe..');
});
