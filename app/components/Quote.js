const React = require('react');
const api = require('../utils/mock-api');

class Quote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: ' LOADING ',
      author: null
    };
    this.updateQuote = this.updateQuote.bind(this);
  }

  componentDidMount() {
    this.updateQuote();
  }

  updateQuote() {
    api.fetchNewQuote().then(response => {
      this.setState(function() {
        return {
          quote: response,
          author: 'Bruce Lee'
        };
      });
    });
  }

  render() {
    return (
      <div className='border'>
        <div>
          <pre className='body'>{this.state.quote}</pre>
          <pre className='author'>~ {this.state.author}</pre>
        </div>
      </div>
    );
  }
}

module.exports = Quote;
