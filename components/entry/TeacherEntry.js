import React from 'react';
import Entry from './Entry';

export default class StudentEntry extends React.Component {
  static propTypes = {
    logIn: React.PropTypes.func.isRequired,
    signUp: React.PropTypes.func.isRequired,
    checkAdmin:React.PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state={
    	login:true, //当前是登陆界面还是注册界面
    	checked:false //是否通过管理员密码验证
    }
  }

  render() {
  	const {login,checked}=this.state;
  	const {logIn,signUp}=this.props;
    return (
       <div>
       <div className="clearfix">
      	 <div className="btn-group pull-right">
		  <button type="button" className="btn btn-success">教师入口</button>
		  <button type="button" className="btn btn-default" onClick={()=>PubSub.publish('route','student_entry')}>学生入口</button>
		</div>
	   </div>
	   {checked?<Entry logIn={logIn} signUp={signUp}/>:
		<div style={{marginTop:100,width:400}} className="center-block">
			<div className="input-group ">
		      <input type="text" className="form-control" placeholder="输入管理员密码" ref="admin"/>
		      <span className="input-group-btn">
		        <button className="btn btn-default" type="button" onClick={this.check.bind(this)}>进入</button>
		      </span>
		    </div>
	    </div>}
      </div>
    );
  }

  check(){
  	const me=this;
  	const {checkAdmin}=this.props;
  	const pwd=this.refs.admin.value;
  	checkAdmin(pwd).then(_=>me.setState({checked:true})).catch(e=>PubSub.publish("msg.error","管理员密码错误！"));
  }
}
