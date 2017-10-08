import React, { Component } from 'react';
class Board extends Component{
render(){
	return (
       <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 className="modal-title" id="myModalLabel">修改菜谱</h4>
      </div>
      <div className="modal-body">
        <form>
          <div className="form-group">
            <label htmlFor="菜谱名称" className="control-label">菜谱名称</label>
            <input type="text" className="form-control" id="recipiName" />
          </div>
          <div className="form-group">
            <label htmlFor="原料" className="control-label">原料</label>
            <textarea className="form-control" id="ingredients"></textarea>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-default" data-dismiss="modal" id='close' onClick={this.props.close}>关闭</button>
        <button type="button" className="btn btn-primary" onClick={this.props.update}>保存</button>
      </div>
    </div>
  </div>
</div>   


		)
}

}
export default Board;