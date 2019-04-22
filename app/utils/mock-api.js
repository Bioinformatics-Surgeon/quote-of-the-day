// require axios or other http framework for making request for data
const data = require('./quotes.js');

module.exports = {
  fetchNewQuote: function() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        
        resolve();
      }, 1000)
    }

    

    let quoteOfTheDay = '';

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
        // reject() will return Error
      }, 0);
    });

    function onSuccess() {
      console.log('Hello');
      console.log(data.quotes[0]);
      let randomNum = Math.floor(Math.random() * data.quotes.length);
      quoteOfTheDay = data.quotes[randomNum].quote;
      return quoteOfTheDay;
    }

  }
};
