import React from 'react';

export default class Login extends React.Component {
  static propTypes = {
    logIn: React.PropTypes.func.isRequired,
    routeSuccess:React.PropTypes.string//成功后去向的路由，默认为login_after
  };

  constructor(props) {
    super(props);
    this.gotoLoginAfter=this.gotoLoginAfter.bind(this);
    this.showError=this.showError.bind(this);
  }

  render() {

    return (
		<form  role="form"  onSubmit={this.handleSubmit.bind(this)}>
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
	    logIn(username,password).then(this.gotoLoginAfter).catch(this.showError)
	}

	gotoLoginAfter(){
		const routeSuccess=this.props.routeSuccess||'login_after';
		PubSub.publish('route',routeSuccess);
	}
	showError(){
		PubSub.publish('msg.error','登陆错误');
	}
}




