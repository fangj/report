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

import StudentEntry from '../components/entry/StudentEntry';
import TeacherEntry from '../components/entry/TeacherEntry';
import Entry from '../components/entry/Entry';


storiesOf('入口 ', module)
  .add('Entry', () => <Entry signUp={()=>{return Promise.resolve()}} logIn={()=>{return Promise.resolve()}} />)
  .add('StudentEntry', () => <StudentEntry signUp={()=>{return Promise.resolve()}} logIn={()=>{return Promise.resolve()}} />)
  .add('TeacherEntry', () => <TeacherEntry signUp={()=>{return Promise.resolve()}} logIn={()=>{return Promise.resolve()}} 
  	checkAdmin={(password)=>{return password==="admin"?Promise.resolve():Promise.reject()}}/>);

import StudentReportList from '../components/student_report_list';
import StudentReportListPage from '../components/student_report_list/page';

const report_list=[{name:"abc",_id:"1"},{name:"def",_id:"2"}]
storiesOf('StudentReportList',module)
  .add('StudentReportList',()=><StudentReportList getReportTemplates={()=>Promise.resolve(report_list)}/>)
  .add('StudentReportListPage',()=><StudentReportListPage getReportTemplates={()=>Promise.resolve(report_list)} logout={()=>Promise.resolve()}/>)


const report={name:'a report',blocks:[{_id:1},{_id:2}]}
import StudentEdit from '../components/student_edit';
storiesOf('StudentEdit',module)
  .add('StudentEdit',()=><StudentEdit templateID={"1"} getCurrtentUser={()=>({_id:"1",name:"b"})} 
  	getReportByTemplate={()=>Promise.resolve(report)}
  	renderBlock={(b,{isEdit})=><pre>{isEdit?"edit":JSON.stringify(b,null,2)}</pre>}/>)