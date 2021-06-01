const { memory } = require('console');
const mongoose = require('mongoose');
const { stringify } = require('querystring');
const Schema = mongoose.Schema;
// apibrezti kokio tipo duomenys bus saugomi muusu DB
// {title: stringify, body: stringify, ..}

//vienas postas
const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // adds timestamps
);

// exportuoti naujais sukurta objekta pagal sia schema
//                              turetu buti vienaskaita musu kolekcijos name ('post')
const Post = mongoose.model('post', postSchema);

module.exports = Post;
