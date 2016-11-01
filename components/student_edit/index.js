import React from 'react';
require('./student_edit.css');


export default class StudentEdit extends React.Component {
  static propTypes = {
  	templateID:React.PropTypes.string.required,
    getCurrtentUser: React.PropTypes.func.required,
    getReportByTemplate:React.PropTypes.func.required,
    renderBlock:React.PropTypes.func.required
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
      	<div>
      		{report.blocks.map(this.showBlock)}
      	</div>
      </div>
    );
  }

  showBlock(block,idx){
  	const {renderBlock}=this.props;
  	return <div key={idx} className="block">{renderBlock(block)}</div>
  }
}

const gotoStudentReportList=()=>{PubSub.publish("route","student_report_list")}