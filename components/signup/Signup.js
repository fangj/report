import React from 'react';

export default class Signup extends React.Component {
  static propTypes = {
    signUp: React.PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
		<form className="form-signup" role="form"  onSubmit={this.handleSubmit.bind(this)}>
	        <h2 className="form-signup-heading">请注册</h2>
	        <input type="text" className="form-control" placeholder="用户名" required="" ref="username"/>
	        <input type="password" className="form-control" placeholder="密码" required="" ref="password"/>
	        <button className="btn btn-lg btn-primary btn-block" type="submit">登录</button>
	      </form>

    );
  }

   handleSubmit(e) {
	    e.preventDefault();
	    const username=this.refs.username.value;
	    const password=this.refs.password.value;
	    // console.log(username,password)
	    const {signUp}=this.props;
	    signUp(username,password).then(gotoSignupAfter).catch(showError)
	}
}

const gotoSignupAfter=()=>{
	PubSub.publish('route','signup_after');
}
const showError=()=>{
	PubSub.publish('msg.error','注册错误');
}

