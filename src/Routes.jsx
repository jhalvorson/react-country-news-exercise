var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var CreateHistory = require('history/lib/createHashHistory');

var History = new CreateHistory({
  queryKey: false
});

var Base = require('./components/Base.jsx');
var News = require('./components/Article.jsx');
var Photos = require('./components/Page2.jsx');

var Routes = (
  <Router history={History}>
    <Route component={Base}>
      <Route path="/" component={News} />
      <Route path="/photos" component={Photos} />
    </Route>
  </Router>
);

module.exports = Routes;
