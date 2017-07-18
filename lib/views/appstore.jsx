var React = require('react');
var createReactClass = require('create-react-class');
var DefaultLayout = require('./layouts/default');

var Home = createReactClass({
  render() {
    return (
        <DefaultLayout title="App Store">
        <div dangerouslySetInnerHTML={{__html: this.props.html}} />
        </DefaultLayout>
    );
  }
});

module.exports = Home;

