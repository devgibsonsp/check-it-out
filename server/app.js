const express = require('express')
const app = express()
const port = 3001

var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/checkItOut', function (err, client) {
  if (err) throw err

  var db = client.db('checkItOut')

  db.collection('users').find().toArray(function (err, result) {
    if (err) throw err

    console.log(result)
  })
})

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/quotes', (req, res) => {
    console.log('Hellooooooooooooooooo!');
    res.send('Hello World 2')
  });

  app.post('/loginUser', (req, res) => {
    const login = true;
    res.send(login);
  });


app.listen(port, () => console.log(`Example app listening on port ${port}!`))