import React from 'react';
import Entry from './Entry';

export default class StudentEntry extends React.Component {
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
    return (
       <div>
      	<div className="btn-group pull-right">
		  <button type="button" className="btn btn-default" onClick={()=>PubSub.publish('route','teacher_entry')}>教师入口</button>
		  <button type="button" className="btn btn-success">学生入口</button>
		</div>
		<Entry logIn={logIn} signUp={signUp}/>
      </div>
    );
  }
}
