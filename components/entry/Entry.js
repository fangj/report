import React from 'react';
import LoginOrSignup from '../login/LoginOrSignup';
import SignupOrLogin from '../signup/SignupOrLogin';

export default class Entry extends React.Component {
  static propTypes = {
    logIn: React.PropTypes.func.isRequired,
    signUp: React.PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state={
    	login:true
    }
  }

  render() {
  	const {login}=this.state;
  	const {logIn,signUp}=this.props;
    return (login?<LoginOrSignup logIn={logIn}/>:<SignupOrLogin signUp={signUp}/>);
  }


  handleRoute(msg,route){
  	if(route=='signup'){
  		this.setState({login:false}) //内层点击注册，切换到注册状态
  	}else if(route=='login'){
  		this.setState({login:true}) //内层点击登陆，切换到登陆状态
  	}
  }

  componentDidMount() {
  	this.token=PubSub.subscribe('route',this.handleRoute.bind(this));
  }
  componentWillUnmount() {
  	PubSub.unsubscribe(this.token);
  }
}
