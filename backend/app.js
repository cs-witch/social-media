const express = require('express');
const bodyParser = require("body-parser");

const app = express();

// handle all incoming requests
// pass body parser call json method
app.use(bodyParser.json());
// parse url encoded data
app.use(bodyParser.urlencoded({ extended: false}));

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
app.post("/api/posts", (req, res, next) => {
  const posts = req.body;
  console.log(post);
  res.status(201).json ({
    message: "Post added successfully.";
  })
});


app.use('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: '123',
      title: 'First server-side post',
      content: 'This is coming from the server'
    },
    {
      id: 'abc',
      title: 'Second server-side post',
      content: 'This is coming from the server!'
    }
  ];
  res.status(200).json({
    message: 'Posts fetched successfully!',
    posts: posts
  });
});

module.exports = app;
