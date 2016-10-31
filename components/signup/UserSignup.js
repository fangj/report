import React from 'react';

export default class UserSignup extends React.Component {
  static propTypes = {
    signUp: React.PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
			<form className="form-horizontal" role="form" onSubmit={this.handleSubmit.bind(this)}>
			  <div className="form-group">
			    <label htmlFor="inputEmail3" className="col-sm-2 control-label">Email</label>
			    <div className="col-sm-10">
			      <input type="email" className="form-control" id="inputEmail3" placeholder="Email" ref="email"/>
			    </div>
			  </div>
			  <div className="form-group">
			    <label htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label>
			    <div className="col-sm-10">
			      <input type="password" className="form-control" id="inputPassword3" placeholder="Password" ref="password"/>
			    </div>
			  </div>
			  <div className="form-group">
			    <div className="col-sm-offset-2 col-sm-10">
			      <button type="submit" className="btn btn-default">Sign in</button>
			    </div>
			  </div>
			</form>

    );
  }

   handleSubmit(e) {
	    e.preventDefault();
	    const email=this.refs.email.value;
	    const password=this.refs.password.value;
	    // console.log(email,password)
	    const {signUp}=this.props;
	    signUp(email,password).then(gotoSignUpAfter).catch(showError)
	}
}

const gotoSignUpAfter=()=>{
	PubSub.publish('route','signup_after');
}
const showError=()=>{
	PubSub.publish('msg.error','注册错误');
}

