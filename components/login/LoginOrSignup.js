import React from 'react';
import Login from './Login';
require('./login.css')

export default class LoginOrSignup extends React.Component {
  static propTypes = {
    logIn: React.PropTypes.func.isRequired,
    routeSuccess:React.PropTypes.string,//成功后去向的路由，默认为login_after
    routeSignup:React.PropTypes.string //点击注册按钮的路由，默认为signup
  };

  constructor(props) {
    super(props);
  }

  render() {
  	const {logIn,routeSuccess}=this.props;
  	const gotoSignup=()=>{
		const routeSignup=this.props.routeSignup||'signup';
		PubSub.publish('route',routeSignup);
	}
    return (
      <div className="form-signin">
      	<Login logIn={logIn} routeSuccess={routeSuccess}/>
        <button className="btn btn-lg btn-default btn-block" style={{marginTop:"100px"}} onClick={gotoSignup}>注册</button>
      </div>
    );
  }
}

