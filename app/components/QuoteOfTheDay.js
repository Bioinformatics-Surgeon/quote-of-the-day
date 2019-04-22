const React = require('react');
const api = require('../utils/mock-api');
class QuoteOfTheDay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: 'Hello',
      author: 'Bruce Lee'
    };
    this.updateQuote = this.updateQuote.bind(this);
  }

  componentDidMount() {
    this.updateQuote();
  }

  updateQuote() {
    let response = api.fetchNewQuote();
    this.setState(function() {
      return {
        quote: response
      };
    });
  }

  render() {
    return (
      <div className='container'>
        <div>
          <pre className='body'>{this.state.quote}</pre>
          <pre className='author'>~{this.state.author}</pre>
        </div>
      </div>
    );
  }
}

module.exports = QuoteOfTheDay;
