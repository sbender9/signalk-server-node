var React = require('react');
var createReactClass = require('create-react-class');
var DefaultLayout = require('./layouts/default');

var Row = createReactClass({
  render() {
    var module = this.props.moduleInfo
   
    return (
        <tr>
        <td dangerouslySetInnerHTML={{__html: module.installColumn}} />
        <td dangerouslySetInnerHTML={{__html: module.updateColumn}} />
        <td dangerouslySetInnerHTML={{__html: module.nameColumn}} />
        <td dangerouslySetInnerHTML={{__html: module.descriptionColumn}} />
        <td dangerouslySetInnerHTML={{__html: module.authorColumn}} />
        <td dangerouslySetInnerHTML={{__html: module.npmColumn}} />
       </tr>
    );
  }
});

var Section = createReactClass({
  render() {
    return (
      <div>
      <h3>{this.props.title}</h3>
      <table className="table table-bordered">
      <tr>
        <th>Install</th>
        <th>Update</th>
        <th>Name</th>
        <th>Description</th>
        <th>Authors</th>
        <th>Link</th>
      </tr>
        {this.props.modules.map(module => {
          return (
              <Row moduleInfo={module} />
          );
      })}
      </table>
      </div>
    );
  }
});

var Home = createReactClass({
  render() {
    return (
        <DefaultLayout title="App Store">
        { this.props.anyInstalled && 
          <p className="text-warning">Server restart is required to pickup new or updated plugins or web apps.</p>
        }
        <Section title="Plugins" modules={this.props.plugins} />
        <Section title="Web Apps" modules={this.props.webapps} />

        { this.props.moduleInstalling &&
          <script dangerouslySetInnerHTML={{__html: "setTimeout(function(){ window.location.reload(1)}, 2000)"}}></script>
        }
      
        </DefaultLayout>
    );
  }
});

module.exports = Home;

