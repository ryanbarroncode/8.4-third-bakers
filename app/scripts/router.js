var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var RecipeListContainer = require('./components/recipe.jsx').RecipeListContainer;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': "index",
    'auth/': 'auth'
  },
  index: function(){
    ReactDOM.render(
      React.createElement(RecipeListContainer),
      document.getElementById('app')
    )
  },

  auth: function(){
    ReactDOM.render(
      React.createElement()
    )
  }

});

var appRouter = new AppRouter;

module.exports = appRouter;
