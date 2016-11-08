import React from 'react';
import TeacherReportEdit from '../teacher_report_edit';
import cx from 'classnames';
export default class TeacherReportPage extends React.Component {
  static propTypes = {
    getTemplateByID : React.PropTypes.func.isRequired,
    templateID: React.PropTypes.string.isRequired,
    renderBlock: React.PropTypes.func.isRequired,
    removeBlock: React.PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state={edit:true} //edit:true:编辑实验模板，false：批改实验报告
    this.setEdit=this.setEdit.bind(this);
    this.setJudge=this.setJudge.bind(this);
  }

  componentDidMount() {
  	const {templateID,getTemplateByID}=this.props;
  	getTemplateByID(templateID).then(template=>{
  		this.setState({template})
  	})
  }
  render() {
  	const {renderBlock,removeBlock}=this.props;
  	const {template,edit}=this.state;
  	if(!template){
  		return null;
  	}
    return (
      <div>
      	<h1>{template.name}</h1>
      	<div className="btn-group">
      	<button type="button" className={cx("btn", {"btn-success":edit})} onClick={this.setEdit}>编辑实验模板</button>
      	<button type="button" className={cx("btn", {"btn-success":!edit})} onClick={this.setJudge}>批改实验报告</button>
      	</div>
      	{edit?<TeacherReportEdit blocks={template.blocks} renderBlock={renderBlock} removeBlock={removeBlock}/>:<div>批改实验报告</div>}
      </div>
    );
  }
  setEdit(){//编辑
  	this.setState({edit:true});
  }
  setJudge(){//批改
  	this.setState({edit:false});
  }
}
