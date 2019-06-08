const request = require('request');
const process = require('process');

if (process.argv[2] === 'list') {
  request('https://lidemy-book-store.herokuapp.com/books?_limit=20',
    (erro, response, body) => {
      const obj = JSON.parse(body);
      obj.forEach((element) => {
        console.log(`${element.id} ${element.name}`);
      });
    });
}

if (process.argv[2] === 'read') {
  request(`https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
    (error, response, body) => {
      const data = JSON.parse(body);
      console.log(data.name);
    });
}

if (process.argv[2] === 'delete' && process.argv[3]) {
  request.delete(`https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
    (error, response) => {
      if (error) {
        console.log(error);
      } else if (response) {
        console.log('delete sucessfully');
      }
    });
}

if (process.argv[2] === 'create' && process.argv[3]) {
  request.post(
    {
      url: 'https://lidemy-book-store.herokuapp.com/books',
      form: {
        name: process.argv[3],
      },
    },
    (error, response) => {
      if (error) {
        console.log(error);
      } else if (response) {
        console.log('create sucessfully');
      }
    },
  );
}

if (process.argv[2] === 'update' && process.argv[3] && process.argv[4]) {
  request.patch(
    {
      url: `https://lidemy-book-store.herokuapp.com/books${process.argv[3]}`,
      form: {
        name: process.argv[4],
      },
    },
    (error, response) => {
      if (error) {
        console.log(error);
      } else if (response) {
        console.log('update sucessfully');
      }
    },
  );
}
