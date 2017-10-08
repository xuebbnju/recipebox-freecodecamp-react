import React, { Component } from 'react';
import {ListGroupItem,ListGroup}  from 'react-bootstrap';
class IngredientList extends Component{
render(){
var lists=this.props.ingredients.map(function(ingredient,index){

	return (
        <ListGroupItem key={index+1}>{ingredient}</ListGroupItem>


		)
});
return (
      <ListGroup>
      {lists}
      </ListGroup>

	)


}
}
export default IngredientList;