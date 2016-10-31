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

storiesOf('Login ', module)
  .add('success', () => (
  	<UserLogin login={()=>{return Promise.resolve()}}/>
  ))
  .add('fail', () => (
  	<UserLogin login={()=>{return Promise.reject()}}/>
  ));