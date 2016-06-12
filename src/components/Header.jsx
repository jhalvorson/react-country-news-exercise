var React = require('react');
var Social = require('./Social.jsx');
var Menu = require('./Menu.jsx');

var mainHeader = React.createClass({
  render: function(){
    var styles = {
        header: {
          color:'white',
          backgroundColor: '#3F51B5',
          minHeight: '300px',
          marginBottom: '-100px'
        },
        content:{
          padding: "35px"
        }
    };
    return(
      <header style={styles.header} className="header header-panel row">
        <div style={styles.content} className="container">
          <div className="col-md-6">
            <h1>Country News</h1>
            <h4>A quick devslopes exercise</h4>
          </div>
          <div className="col-md-6 pull-right">
            <Social />
          </div>
        </div>
        <div className="container">
            <Menu />
        </div>
      </header>
    );
  }
});

module.exports = mainHeader;
