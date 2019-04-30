const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./components/App');
require('./index.css');

// This is how we render to the dom
ReactDOM.render(<App />, document.getElementById('app'));
