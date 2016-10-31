import React from 'react';
import Signup from './Signup';
require('./login.css')

export default class SignupOrLogin extends React.Component {
  static propTypes = {
    signUp: React.PropTypes.func.isRequired,
    routeSuccess:React.PropTypes.string,//成功后去向的路由，默认为login_after
    routeLogin:React.PropTypes.string //点击注册按钮的路由，默认为login
  };

  constructor(props) {
    super(props);
  }

  render() {
  	const {signUp,routeSuccess}=this.props;
    const gotoLogin=()=>{
      const routeLogin=this.props.routeLogin||'login';
      PubSub.publish('route',routeLogin);
    }
    return (
      <div className="form-signin">
      	<Signup signUp={signUp}/>
        <button className="btn btn-lg btn-default btn-block" style={{marginTop:"100px"}} onClick={gotoLogin}>登录</button>
      </div>
    );
  }

}

