const React = require('react');

Quote = props => {
  return (
    <div className="container">
      <div className="title">{props.quoteTitle}</div>
      <div className="body">
        <pre>{props.quoteBody}</pre>
      </div>
    </div>
  );
};

module.exports = Quote;
