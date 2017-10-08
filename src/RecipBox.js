import React, { Component } from 'react';
import Recipe from './Recipe';
import { Accordion,Panel } from 'react-bootstrap';



class RecipBox extends Component{
	render(){
	 

	var recipes=this.props.recipes.map(function(recipe,index){
        return (
          <Panel collapsible header={recipe.title} eventKey={index}  key={index} bsStyle="success">
           <Recipe ingredients={recipe.ingredients} title={recipe.title} index={index} open={this.props.open} delete={this.props.delete} />
          </Panel>
        	)
	}.bind(this));
	return (
   
  <Accordion>
    {recipes}
  </Accordion>
     
 

		)

    }

}
export default RecipBox;