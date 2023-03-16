const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

app.use(bodyParser.json());

app.post('/', (req, res) => {
  console.log("Les donnees recues de l'API : ");
  console.log(req.body);
  res.send('API recu !');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
