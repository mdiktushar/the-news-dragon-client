const express = require("express");
const cors = require("cors");
const categories = require(`./data/categories.json`);
const news = require(`./data/news.json`);

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get(`/`, (request, response) => {
  response.send("Dragon is running");
});

app.get(`/categories`, (request, response) => {
  response.send(categories);
});

app.get(`/news`, (request, response) => {
  response.send(news);
});

app.get(`/news/:id`, (request, response) => {
  const id = request.params.id;
  const selectedNews = news.find((n) => n._id === id);
  response.send(selectedNews);
});

app.get(`/categories/:id`, (request, response) => {
  const id = request.params.id;
  if (id == 0) {
    response.send(news);
  } else {
    const categoryNews = news.filter((n) => n.category_id === id);
    response.send(categoryNews);
  }
});

app.listen(port, () => {
  console.log(`Dragon API is running on port: ${port}`);
});
