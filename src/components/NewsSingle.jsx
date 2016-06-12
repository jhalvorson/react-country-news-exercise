var React = require('react');

var SingleNews = React.createClass({
  render: function(){

    var styles = {
      img: {
        width: "250px",
        marginTop: "40px",
        borderRadius: "3px"
      },
      author: {
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        textAlign: "center",
        marginTop: "20px"
      },
      panel: {
        padding: "30px"
      },
      title: {
        paddingBottom: "15px"
      },
      btn: {
        backgroundColor:"#3F51B5",
        marginTop: "40px",
        marginLeft: "15px"
      }
    };

    return(
      <div style={styles.panel} className="panel panel-default">
        <div className="panel-body">
          <div className="col-md-2">
          <img style={styles.author} src={this.props.author} />
          </div>
          <div className="col-md-10">
            <h2 style={styles.title}>{this.props.title}</h2>
            <h5>{this.props.sub}</h5>
            <p>{this.props.text}</p>
            <img style={styles.img} src={this.props.thumbnail} />
            <div className="row">
              <a style={styles.btn} href="javascript:void(0)" className="btn btn-raised btn-primary">Read More</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = SingleNews;
