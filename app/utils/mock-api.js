// require axios or other http framework for making request for data
const data = require('./quotes.js');

module.exports = {
  fetchNewQuote: function() {
    let randomNum = Math.floor(Math.random() * data.quotes.length);
    let quoteOfTheDay = data.quotes[randomNum].quote;
    return quoteOfTheDay;
    // return new Promise(resolve => {
    //   setTimeout(() => {
    //     resolve(quoteOfTheDay);
    //   }, 1000);
    // });
  }
};
