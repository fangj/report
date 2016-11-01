import React from 'react';
require('./student_report_list.css');

export default class StudentReportList extends React.Component {
  static propTypes = {
    getReportTemplates: React.PropTypes.func.required,
  };

  constructor(props) {
    super(props);
    this.state={}
  }

  componentDidMount() {
  	const {getReportTemplates}=this.props;
  	getReportTemplates().then(reports=>{
  		this.setState({reports});
  	})
  }

  render() {
  	const {reports}=this.state;
  	if(!reports){return null;}
    return (
      <div className="row">
      	{reports.map(showReport)}
	  </div>
    );
  }
}

const showReport=(report)=>{
	return  <div key={report._id} className="col-xs-4"><div className="report-thumb" onClick={()=>PubSub.publish("route","student_edit/"+report._id)}>{report.name}</div></div>
}
