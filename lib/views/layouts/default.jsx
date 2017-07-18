var React = require('react');

class DefaultLayout extends React.Component {
  render() {
    const script = this.props.script
    const title = this.props.title
    const menu = { 'Home': '/', 'Apps': '/apps', 'App Store': '/appstore', 'Plugins': '/plugins/configure' };
    return (
        <html lang="en">
          <head>
            <meta charset="utf-8"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>SignalK Server - {title}</title>
            <link href="/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet"/>
          </head>
          <body>
            <div className="container">
              <nav className="navbar navbar-default">
                <div className="container-fluid">
                  <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">SignalK Node Server</a>
                  </div>
                  <div id="navbar" className="navbar-collapse collapse">
                  <ul className="nav navbar-nav">
        
                    {Object.keys(menu).map(key => {
                      var url = menu[key]
                      if ( title == key ) {
                        return (
                            <li className="active"><a href={url}>{key}</a></li>
                        )
                      } else {
                        return (
                            <li><a href={url}>{key}</a></li>
                        )          
                      }})
                    }
      
                    </ul>
        { this.props.userLoggedIn && 
                    <ul className="nav navbar-nav navbar-right">
                      <li><a href="/logout">Logout</a></li>
          </ul> }
                  </div>
                </div>
              </nav>
            </div>
            
            <div className="container">
              {this.props.children}
            </div>
            
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>            
            <script src="/bootstrap/dist/js/bootstrap.min.js"></script>

          { this.props.script &&
            <script src={script}></script>
          }
      
          </body>
        </html>
      );
  }
}

module.exports = DefaultLayout;

