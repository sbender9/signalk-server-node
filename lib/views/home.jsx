var React = require('react');
var createReactClass = require('create-react-class');
var DefaultLayout = require('./layouts/default');

var Home = createReactClass({
  render() {
    return (
      <DefaultLayout title="Home">
        <div>Server Home</div>
      </DefaultLayout>
    );
  }
});

module.exports = Home;

