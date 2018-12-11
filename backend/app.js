const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const postsRoutes = require("./routes/posts")
// const Post = require('./models/post');

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

app.use("/api/posts", postsRoutes);

module.exports = app;
