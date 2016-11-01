import React from 'react';
import StudentReportList from './index';

export default class StudentReportListPage extends React.Component {
  static propTypes = {
    getReportTemplates: React.PropTypes.func.required,
    logout: React.PropTypes.func.required,
  };

  constructor(props) {
    super(props);
  }

  render() {
  	const {getReportTemplates,logout}=this.props;
    return (
      <div>
	      <nav className="navbar navbar-default" role="navigation">
	      <div className="container-fluid">
	        <div className="btn-toolbar navbar-right">
				<button type="button" className="btn btn-default navbar-btn" onClick={()=>logout().then(gotoGallary)}>
					<span className="glyphicon glyphicon-picture"></span>
				</button>
				<button type="button" className="btn btn-default navbar-btn" onClick={()=>logout().then(gotoLoginPage)}>
					<span className="glyphicon glyphicon-user"></span>
				</button>
			</div>
      	  </div>
	      </nav>
      	
      	<h1>选择实验</h1>
      	<StudentReportList getReportTemplates={getReportTemplates}/>
      </div>
    );
  }
}

const gotoLoginPage=()=>{PubSub.publish("route",'student_login')}
const gotoGallary=()=>{PubSub.publish("route",'student_gallary')}
