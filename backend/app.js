const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const Post = require('./models/post');

const app = express();

mongoose.connect("mongodb+srv://andisa:ggPZZv6B6a1vvQMW@cluster0-dznjh.mongodb.net/node-angular?retryWrites=true", { useNewUrlParser: true })
  .then(()  => {
    console.log('Connected to database!')
  })
  .catch(() => {
    console.log('Connection failed!')
  });

// handle all incoming requestss
// pass body parser call json method
app.use(bodyParser.json());
// parse url encoded data
// app.use(bodyParser.urlencoded({ extended: false}));

//CORS headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
    );
  next();
});

// API posts route
app.post('/api/posts', (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save();
  res.status(201).json({
    message: "Post added successfully!"
  });
});

// returns all entries
app.get('/api/posts', (req, res, next) => {
  Post.find().then(documents => {
      res.status(200).json({
        message: 'Posts fetched successfully!',
        posts: documents
    });
    // .catch();
  });
});

// delete routing
app.delete("/api/posts/:id", (req, res, next) => {
  Post.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "Post deleted!"});
  });
});

  module.exports = app;
