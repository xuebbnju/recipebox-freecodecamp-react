import React, { Component } from 'react';
import IngredientList from './IngredientList';
import {ButtonToolbar,Button}  from 'react-bootstrap';

class Recipe extends Component{
 

render(){

return (
        <div>
        <h4 style={{'textAlign':'center'}}>原料</h4>
        <hr/>
        <IngredientList ingredients={this.props.ingredients} />
         <ButtonToolbar>
          <Button bsStyle="danger" onClick={this.props.delete} >删除</Button>
       
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal" onClick={()=>this.props.open(this.props.title,this.props.ingredients,this.props.index)}>
       修改菜谱
       </button>     
          </ButtonToolbar>
         
        </div>

	)

}


}
export default Recipe;