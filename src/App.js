import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RecipBox from './RecipBox';
import AddBox from './AddBox';
import Board from './Board';
 import $ from 'jquery';
//import {Modal,Button,FormControl,ButtonToolbar}  from 'react-bootstrap';
class App extends Component{
constructor(){
		 var  r=localStorage.hasOwnProperty('recipes') ? JSON.parse(localStorage["recipes"]) :[
		{title:'可乐鸡翅',ingredients:['鸡翅','可乐','盐','料酒']},
		{title:'油焖大虾',ingredients:['对虾','姜','西红柿']},
		{title:'麻婆豆腐',ingredients:['豆腐','郫县豆瓣','肉沫','花椒粒','小葱']}
		];
		
		super();
		this.state={
		recipes:r,
		
		isEdit:false,
		index:-1,
		
	}
	this.open=this.open.bind(this);
	this.close=this.close.bind(this);
	this.update=this.update.bind(this);
	this.delete=this.delete.bind(this);
	
}



delete(){
	var recipes=this.state.recipes;
	 recipes.splice(this.state.index, 1);
	  this.setState({recipes:recipes,isEdit:false,index:-1});
	   ReactDOM.render(<App />, document.getElementById('root'));
 localStorage.setItem("recipes", JSON.stringify(this.state.recipes));


}
close(){
$('#recipiName').val('');
   $('#ingredients').val('');

// ReactDOM.render(<RecipBox recipes={this.recipes} />, document.getElementById('box'));	
}




  update() {
  	 var recipes=this.state.recipes;
  	  var ingredients=$('#ingredients').val().split(',');
  	  var index=this.state.index;
 if(this.state.isEdit){
   console.log(this.state.index);
   recipes[index].title= $('#recipiName').val();
   recipes[index].ingredients=ingredients;
   this.setState({recipes:recipes,isEdit:false,index:-1});
 
  

 }else{
   
   
    if($('#recipiName').val()){
      recipes.push({title:$('#recipiName').val(),ingredients:ingredients});
    }else{
    	 recipes.push({title:'undefined',ingredients:ingredients});
    }

 }
   
   $('#close').trigger('click');
 
 ReactDOM.render(<App />, document.getElementById('root'));
localStorage.setItem("recipes", JSON.stringify(this.state.recipes));
  }

  open(title,ingredients,index) {
  	console.log(index);
this.setState({isEdit:true,index:index});
   $('#recipiName').val(title);
   $('#ingredients').val(ingredients);
  
   

  }
 
	render(){
		return(
       <div className="container wrape">
       <RecipBox  recipes={this.state.recipes} open={this.open} delete={this.delete} />
       <AddBox open={this.open}  />
       <Board  update={this. update} close={this.close} />



       </div>

    )

	}
}
export default App;