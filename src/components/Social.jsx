var React = require('react');

var Social = React.createClass({
  render: function(){

    var styles = {
      list: {
        listStyleType: 'none',
        float:"right",
        paddingTop: "20px"
      },
      listItem: {
        display: 'inline-block',
        paddingLeft: '10px',
        paddingRight: '10px'
      },
    };

    return(
      <ul style={styles.list} className="social__list">
        <li style={styles.listItem}><i className="fa fa-facebook"></i></li>
        <li style={styles.listItem}><i className="fa fa-instagram"></i></li>
        <li style={styles.listItem}><i className="fa fa-medium"></i></li>
      </ul>
    );
  }
});

module.exports = Social;
