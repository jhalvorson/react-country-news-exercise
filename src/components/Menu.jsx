/* Based on https://github.com/pyromaticx/fcc-news-app/blob/master/src/components/Menu.jsx */

var React = require('react');
var ReactRouter = require('react-router');

var Link = ReactRouter.Link;

var Menu = React.createClass({

  render: function(){

    var styles = {
      navbar:{
        float: "right",
        marginTop: "-20px"
      },
      navbarItem:{
        color: "white"
      }
    };

    return(
      <div>
          <div className="container">
            <ul style={styles.navbar} className="nav navbar-nav">
              <li onClick={this.setActive}>
              <Link style={styles.navbarItem} to="/">News</Link>
              </li>
              <li onClick={this.setActive}>
              <Link style={styles.navbarItem} to="/Photos">Photos</Link>
              </li>
            </ul>
          </div>
      </div>
    );

  }

});

module.exports = Menu;
