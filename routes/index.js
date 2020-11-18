const express = require('express');
const router = express.Router();
const request = require('request')
const rootURL = 'https://api.chucknorris.io/'
const randomURL ='https://api.chucknorris.io/jokes/random'
const catURL ='https://api.chucknorris.io/jokes/categories'

// router.get('/', function(req, res) {
//   request('https://api.chucknorris.io/jokes/categories', function(error, response, body){
//     const categories = JSON.parse(body)
//     console.log(categories)
//     res.render('index', {joke: null, categories: categories});
//   })
// });

// router.post('/', function(req, res){
//   const options = {
//     url: rootURL + 'jokes/random' + req.body.jokes
//   }
//   request(
//     options,
//     function(err, response, body){
//       const joke = JSON.parse(body)
//       res.render('index', {joke: joke, categories: null})
//     }
//   )
// })

module.exports = router;

router.get('/', function(req, res) {
  request("https://api.chucknorris.io/jokes/categories", function(error, response, body){
    const categories = JSON.parse(body)
    console.log(categories)
    res.render('index', {joke: null, categories: categories});
  })
});

router.post('/', function(req, res) {
  console.log(req.body)
  request("https://api.chucknorris.io/jokes/categories", function(error, response, body){
    const categories = JSON.parse(body)
    let joke_url = "https://api.chucknorris.io/jokes/random"
    if (req.body.category) {
      joke_url = `https://api.chucknorris.io/jokes/random?category=${req.body.category}`
    }
    request(joke_url, function(error, response, body){
      const joke = JSON.parse(body)
      console.log(joke.value)
      res.render('index', {joke: joke, categories: categories});
    })
  })
})
