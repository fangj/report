import React from 'react';
require('./student_edit.less');


export default class StudentEdit extends React.Component {
  static propTypes = {
  	templateID:React.PropTypes.string.isRequired,
    getCurrtentUser: React.PropTypes.func.isRequired,
    getReportByTemplate:React.PropTypes.func.isRequired,
    renderBlock:React.PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state={};
    this.showBlock=this.showBlock.bind(this);
  }

  componentDidMount() {
  	const {templateID,getCurrtentUser,getReportByTemplate}=this.props;
  	const user=getCurrtentUser();
  	getReportByTemplate(templateID,user._id).then(report=>{
  		this.setState({report});
  	})
  }

  render() {
  	const {report}=this.state;
  	if(!report){
  		return null;
  	}
    return (
      <div>
      	<div className="page-header">
			<h1>
				<button  type="button" className="btn btn-default btn-lg" onClick={gotoStudentReportList}>
	  				<span className="glyphicon glyphicon-chevron-left"></span>
				</button>
			{report.name}
			</h1>
		</div>
      	<div >
      		{report.blocks.map(this.showBlock)}
      	</div>
      </div>
    );
  }

  showBlock(block){
    const {renderBlock}=this.props;
  	const {edit}=this.state;
    const _id=block._id;
    const isEdit=(edit===_id);
  	return <div key={_id} className="block">
    <div className="menu">
       <button type="button" className="btn btn-default btn-xs" onClick={()=>this.setState({edit:_id})}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
    </div>
    {renderBlock(block,{isEdit})}</div>
  }


}

const gotoStudentReportList=()=>{PubSub.publish("route","student_report_list")}