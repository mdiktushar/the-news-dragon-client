const express = require('express')
const cors = require('cors')
const categories = require('./data/categories.json')

const app = express();
const port = process.env.PORT || 5000;

app.use(cors())

app.get(`/`, (request, response) => {
  response.send("Dragon is running");
});

app.get('/categories', (request, response) => {
    response.send(categories)
})

app.listen(port, () => {
  console.log(`Dragon API is running on port: ${port}`);
});
