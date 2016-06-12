var React = require('react');

var Header = require('./Header.jsx');

var Base = React.createClass({
  render: function(){

    return(
      <div>
      <Header />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = Base;
