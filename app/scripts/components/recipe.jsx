var React = require('react');

var BaseLayout = require('../layouts/base.jsx');
console.log(BaseLayout);
class RecipeListContainer extends React.Component{
  constructor(props){
    super(props);

  }
  render(){
    return(
      <BaseLayout>
        <h1> food </h1>
      </BaseLayout>
    )
  }
}

module.exports = {
  RecipeListContainer
};
