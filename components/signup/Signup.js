import React from 'react';

export default class Signup extends React.Component {
  static propTypes = {
    signUp: React.PropTypes.func.isRequired,
    routeSuccess:React.PropTypes.string//成功后去向的路由，默认为signup_after
  };

  constructor(props) {
    super(props);
    this.gotoSignupAfter=this.gotoSignupAfter.bind(this);
    this.showError=this.showError.bind(this);
  }

  render() {


    return (
		<form  role="form"  onSubmit={this.handleSubmit.bind(this)}>
	        <h2 className="form-signup-heading">请注册</h2>
	        <input type="text" className="form-control" placeholder="用户名" required="" ref="username"/>
	        <input type="password" className="form-control" placeholder="密码" required="" ref="password"/>
	        <button className="btn btn-lg btn-primary btn-block" type="submit">注册</button>
	      </form>

    );
  }

   handleSubmit(e) {
	    e.preventDefault();
	    const username=this.refs.username.value;
	    const password=this.refs.password.value;
	    // console.log(username,password)
	    const {signUp}=this.props;
	    signUp(username,password).then(this.gotoSignupAfter).catch(this.showError)
	}

	gotoSignupAfter(){
		const routeSuccess=this.props.routeSuccess||'signup_after';
		PubSub.publish('route',routeSuccess);
	}
	showError(){
		PubSub.publish('msg.error','注册错误');
	}
}


