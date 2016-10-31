import React from 'react';

export default class Login extends React.Component {
  static propTypes = {
    logIn: React.PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
		<form className="form-signin" role="form"  onSubmit={this.handleSubmit.bind(this)}>
	        <h2 className="form-signin-heading">请登录</h2>
	        <input type="text" className="form-control" placeholder="用户名" required=""  ref="username"/>
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
	    const {logIn}=this.props;
	    logIn(username,password).then(gotoLoginAfter).catch(showError)
	}
}

const gotoLoginAfter=()=>{
	PubSub.publish('route','login_after');
}
const showError=()=>{
	PubSub.publish('msg.error','登陆错误');
}

