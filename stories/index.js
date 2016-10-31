import React from 'react';
import { storiesOf, action } from '@kadira/storybook';


storiesOf('Button', module)
  .add('with text', () => (
  	<button type="button" className="btn btn-success" onClick={action('clicked')}>Success</button>
  ))
  .add('with some emoji', () => (
    <button onClick={()=>toastr.info('Are you the 6 fingered man?')}>😀 😎 👍 💯</button>
  ))
  .add('with pubsub', () => (
    <button onClick={()=>PubSub.publish('msg.error','something wrong')}>😀 😎 👍 💯</button>
  ));

import UserLogin from '../components/login/UserLogin';

storiesOf('UserLogin ', module)
  .add('success', () => (
  	<UserLogin logIn={()=>{return Promise.resolve()}}/>
  ))
  .add('fail', () => (
  	<UserLogin logIn={()=>{return Promise.reject()}}/>
  ));

import UserSignup from '../components/signup/UserSignup';

storiesOf('UserSignup ', module)
  .add('success', () => (
  	<UserSignup signUp={()=>{return Promise.resolve()}}/>
  ))
  .add('fail', () => (
  	<UserSignup signUp={()=>{return Promise.reject()}}/>
  ));

import Login from '../components/login/Login';

storiesOf('登陆 ', module)
  .add('success', () => (
  	<Login logIn={()=>{return Promise.resolve()}}/>
  ))
  .add('fail', () => (
  	<Login logIn={()=>{return Promise.reject()}}/>
  ));

import Signup from '../components/signup/Signup';

storiesOf('注册 ', module)
  .add('success', () => (
  	<Signup signUp={()=>{return Promise.resolve()}}/>
  ))
  .add('fail', () => (
  	<Signup signUp={()=>{return Promise.reject()}}/>
  ));


import LoginOrSignup from '../components/login/LoginOrSignup';

storiesOf('登陆或注册 ', module)
  .add('success', () => (
  	<LoginOrSignup logIn={()=>{return Promise.resolve()}}/>
  ))
  .add('fail', () => (
  	<LoginOrSignup logIn={()=>{return Promise.reject()}}/>
  ));


import SignupOrLogin from '../components/signup/SignupOrLogin';

storiesOf('注册或登陆 ', module)
  .add('success', () => (
  	<SignupOrLogin signUp={()=>{return Promise.resolve()}}/>
  ))
  .add('fail', () => (
  	<SignupOrLogin signUp={()=>{return Promise.reject()}}/>
  ));

import StudentLogin from '../components/entry/StudentLogin';
import StudentSignup from '../components/entry/StudentSignup';
import TeacherLogin from '../components/entry/TeacherLogin';
import TeacherSignup from '../components/entry/TeacherSignup';

storiesOf('入口 ', module)
  .add('StudentLogin', () => <StudentLogin signUpStudent={()=>{return Promise.resolve()}} logInStudent={()=>{return Promise.resolve()}}
  	 signUpTeacher={()=>{return Promise.resolve()}} logInTeacher={()=>{return Promise.resolve()}} />)
  .add('StudentSignup', () => <StudentSignup/>)
  .add('TeacherLogin', () => <TeacherLogin/>)
  .add('TeacherSignup', () => <TeacherSignup/>);