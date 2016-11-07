import React from 'react';
require('./teacher_report_list.less');

export default class TeacherReportList extends React.Component {
  static propTypes = {
    getReportTemplates: React.PropTypes.func.isRequired, //取得实验模板列表
    createReportTemplate: React.PropTypes.func.isRequired, //创建实验模板
  };

  constructor(props) {
    super(props);
    this.state={};
    this.showTemplate=this.showTemplate.bind(this);
    this.createTemplate=this.createTemplate.bind(this);
  }

  componentDidMount() {
  	const {getReportTemplates}=this.props;
  	getReportTemplates().then(templates=>this.setState({templates}))
  }

  render() {
  	const {templates}=this.state;
  	if(!templates){
  		return null;
  	}
    return (
      <div>
      	<div className="report-item" onClick={this.createTemplate}>+</div>
      	{templates.map(this.showTemplate)}
      </div>
    );
  }

  showTemplate(template){
  	return <div className="report-item" onClick={()=>gotoTemplate(template._id)}>{template.name}</div>
  }
  createTemplate(){
  	const {createReportTemplate}=this.props;
	createReportTemplate().then(newTemplate=>gotoTemplate(newTemplate._id))
  }

}
const gotoTemplate=(id)=>{PubSub.publish("route","teacher_report/"+id)} //进入模板编辑页