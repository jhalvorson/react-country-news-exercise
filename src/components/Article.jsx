var React = require('react');
var Article = require('./NewsSingle.jsx');

var NewsMeta = [{"id":1, "author":"//pbs.twimg.com/profile_images/477103691506282499/bsIaPEiM_400x400.jpeg", "title": "Amazon brings its grocery delivery service to the UK", "sub":"After launching grocery delivery services in the US and more recently in India, Amazon is now bringing daily staples to users in the UK with AmazonFresh.", "text":"The service will first become available to Amazon Prime members in 69 zip codes across north and east London. You can also try Fresh for 30 days at no extra charge. After that, it’ll cost you £14.98 per month for Prime & Fresh, or £6.99 for only the grocery delivery service.", "thumbnail":"http://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2016/06/Amazon-Fresh.jpg" } , {"id":2, "author":"http://0.gravatar.com/avatar/0ed72e6e1b92bf0fab7ea3686d68a754?s=64&d=mm&r=g", "title": "Facebook and Google could be allowed to award university degrees", "sub":"Under proposed changes to the UK’s university education system, companies such as Google and Facebook could be allowed to set up their own academic institutions in the country capable of awarding degrees.", "text":"The paper, called Success As A Knowledge Economy, is aimed at reforming further education in the UK, which would also include a raise in the current £9,000 tuition fees in line with inflation from next year. However, as part of the overall approach, the paper says that reforms to encourage the setting up of ‘challenger institutions’ (ie. education centers that don’t fall within the well-established norms) should go ahead in order to help companies ensure they have suitably skilled workers, as well as providing people with an education.", "thumbnail":"http://cdn1.tnwcdn.com/wp-content/blogs.dir/1/files/2016/05/facebookfeatured-796x398.jpg"}];

var News = React.createClass({
  render: function(){
    var styles = {
      list:{
          marginLeft: "-40px"
      }
    };
    var newsItem = NewsMeta.map(function(item) {
      return <Article key={item.id} author={item.author} title={item.title} sub={item.sub} text={item.text} thumbnail={item.thumbnail} />
    });
    return(<ul style={styles.list}>{newsItem}</ul>);
  }
});

module.exports = News;
