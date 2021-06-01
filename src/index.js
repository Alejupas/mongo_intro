const express = require('express');
const app = express();
// isitraukiam mongoose
const mongoose = require('mongoose');

const { mongoDbString } = require('./config/config');

const Post = require('./models/post');

app.set('view engine', 'ejs');
app.set('views', 'src/views');

// console.log(' mongoDbString', mongoDbString);
// prisijungimas prie duomenu bazes
mongoose
  .connect(mongoDbString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log('Conneced to Mongo ooooooooose');
    app.listen(3000);
  })
  .catch((err) => console.error(err.message));

app.get('/', (req, res) => res.render('index'));

app.get('/posts', (req, res) => {
  // get all posts
  Post.find()
    .then((result) => {
      console.log(' result', result);
      res.send(result);
    })
    .catch((err) => console.error(err.message));
});

//get single post
app.get('/single-post', (req, res) => {
  const id = '60b60617fc64db0a68716001';
  Post.findById(id)
    .then((result) => res.render('single', result))
    .catch((err) => console.log(err.message));
});

// create new post
app.get('/add-post', (req, res) => {
  // sukuriam nauja posta pagal schemoje aprasyta modeli
  const newPost = new Post({
    title: '3000 leagues unders sea',
    author: 'Jaike Swim',
    body: 'Mongo db is an easy way to db. and......',
  });
  // issaugoti duomenu bazeje naudojam .save()
  newPost
    .save()
    .then((result) => res.send(result))
    .catch((err) => console.error(err.message));
});
