const React = require('react');

Quote = props => {
  return (
    <div className="container">
      <div className="title">{props.quoteTitle}</div>
      <div>
        <pre className="body">{props.quoteBody}</pre>
        <pre className="author">~{props.quoteAuthor}</pre>
      </div>
    </div>
  );
};

module.exports = Quote;
