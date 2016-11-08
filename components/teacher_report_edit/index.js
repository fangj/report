import React from 'react';
require('./teacher_report_edit.less');

export default class TeacherReportEdit extends React.Component {
  static propTypes = {
    renderBlock: React.PropTypes.func.isRequired,
    removeBlock: React.PropTypes.func.isRequired,
    blocks:React.PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state={};
    this.showBlock=this.showBlock.bind(this);
  }



  render() {
  	const {blocks}=this.props;
    return (
      <div>	<div className="block">+</div>
      {blocks.map(this.showBlock)}
      </div>
    );
  }

  showBlock(block){
  	const {renderBlock}=this.props;
  	const {edit}=this.state;
    const _id=block._id;
    const isEdit=(edit===_id);
  	return <div className="block">
	  	<div className="menu">
	       <button type="button" className="btn btn-default btn-xs" onClick={()=>this.setState({edit:_id})}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
	    </div>
  		<div className="body">{renderBlock(block,{isEdit})}</div>
  		<div className="score">分数</div>
  		<div className="comment">评语</div>
  	</div>
  }
}
