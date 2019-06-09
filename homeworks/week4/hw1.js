const request = require('request');

request('https://lidemy-book-store.herokuapp.com/books/?_limit=10', (error, response) => {
  console.error('error:', error);
  console.log('statusCode:', response.statusCode);
});
