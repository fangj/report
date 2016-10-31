import React from 'react';
import cx from 'classnames';
import LoginOrSignup from '../login/LoginOrSignup';
import SignupOrLogin from '../signup/SignupOrLogin';

export default class StudentLogin extends React.Component {
  static propTypes = {
    logInStudent: React.PropTypes.func.isRequired,
    signUpStudent: React.PropTypes.func.isRequired,
    logInTeacher: React.PropTypes.func.isRequired,
    signUpTeacher: React.PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state={
    	student:true,
    	login:true
    }
  }

  render() {
  	const {logInStudent,signUpStudent,logInTeacher,signUpTeacher}=this.props;
  	const {student,login}=this.state;
    return (
      <div>
      	<div className="btn-group pull-right">
		  <button type="button" className={cx("btn",{"btn-success":!student,"btn-default":student})}>教师入口</button>
		  <button type="button" className={cx("btn",{"btn-success":student,"btn-default":!student})}>学生入口</button>
		</div>
		{login?<LoginOrSignup logIn={logInStudent}/>:<SignupOrLogin signUp={signUpStudent}/>}
      </div>
    );
  }


}
