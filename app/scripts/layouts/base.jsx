var React = require('react');
var Backbone = require('backbone');


class BaseLayout extends React.Component{
  render(){
    console.log(this.props);
    return(
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Brand</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Login / Signup <span className="sr-only">(current)</span></a></li>
              <li><a href="#">Recipe List</a></li>
              <li><a href="#">Logout</a></li>
            </ul>
            <form className="navbar-form navbar-left">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search" />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">Settings</a></li>
              <li><a href="#">Account</a></li>

            </ul>
          </div>
        </div>
      </nav>
    )
  }
}


module.exports = BaseLayout;
