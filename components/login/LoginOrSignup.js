import React from 'react';
import Login from './Login';
require('./login.css')

export default class LoginOrSignup extends React.Component {
  static propTypes = {
    logIn: React.PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
  	const {logIn}=this.props;
    return (
      <div className="form-signin">
      	<Login logIn={logIn}/>
        <button className="btn btn-lg btn-default btn-block" style={{marginTop:"100px"}} onClick={gotoSignup}>注册</button>
      </div>
    );
  }
}
const gotoSignup=()=>{PubSub.publish("route","signup")}
