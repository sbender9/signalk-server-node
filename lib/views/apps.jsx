var React = require('react');
var createReactClass = require('create-react-class');
var DefaultLayout = require('./layouts/default');

var Home = createReactClass({
  render() {
    return (
        <DefaultLayout title="Apps">
        <ul className="list-group">
        {this.props.webapps.map(componentInfo  => {
          return (
              <li className="list-group-item">
              <b><a href="{componentInfo.name}">{componentInfo.name} </a></b>
              {componentInfo.description}
            </li>
          );
        })}
        </ul>
      </DefaultLayout>
    );
  }
});

module.exports = Home;

