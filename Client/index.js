const express = require('express');
const request = require('request');

const app = express();

const options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/current.json',
  qs: {q: 'London'},
  headers: {
    'X-RapidAPI-Key': 'a17a6ad4d1msh3b81077df07c2c8p121653jsn09a92e7e9579',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    useQueryString: true
  }
};

const targetUrl = 'http://weatherserver:8080';


request(options, function (error, response, body) {
	if (error) throw new Error(error);
  console.log(body);
  request.post({
    url: targetUrl,
    body: body,
  }, (err, response, body) => {
    if (err) {
      console.error('Error:', err);
    } else {
      console.log('Le nom de la ville est : ', body);
    }
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('App listening on port ' + port);
});
