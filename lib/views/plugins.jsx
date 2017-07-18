var React = require('react');
var createReactClass = require('create-react-class');
var DefaultLayout = require('./layouts/default');

var Home = createReactClass({
  render() {
    return (
      <DefaultLayout title="Plugins" script="/plugins/main.js" >
        <div id="main"/>
      </DefaultLayout>
    );
  }
});

module.exports = Home;
