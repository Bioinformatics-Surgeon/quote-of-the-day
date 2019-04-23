// require axios or other http framework for making request for data
const data = require('./quotes.js');

module.exports = {
  fetchNewQuote: function() {
    // new Promise makes a new instance of a Promise to mock an api call.
    // I pass the onSuccess() to reslove() which returns a random quote from my data.
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(onSuccess());
      }, 1000);
    });

    function onSuccess() {
      let randomNum = Math.floor(Math.random() * data.quotes.length);
      quoteOfTheDay = data.quotes[randomNum].quote;
      return quoteOfTheDay;
    }
  }
};
