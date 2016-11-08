import React from 'react';
import {Calendar} from 'react-calendar';
import moment from 'moment';
// import PubSub from 'pubsub-js';

require('./calendar.less')


function onDate(date){
  var fdate=date.format("YYYY-MM-DD")
  PubSub.publish('date',fdate);
}

export default class Cal extends React.Component {
  static propTypes = {
    dates: React.PropTypes.array.isRequired,
    date: React.PropTypes.object
  };

  constructor(props) {
    super(props);
  }

  render() {
    const dates=this.props.dates;
    const date=this.props.date||dates[0];
    const mods=dates.map(d=>({
                date: moment(d),
                classNames: [ 'current' ],
                component: [ 'day'] ,
                events: {onClick: onDate }
              }));
    return (
      <Calendar
          locale='zh-cn'
          date={date}
          startDate={ moment(dates[0]) }
          endDate={ moment(dates[dates.length-1]) } 
          weekNumbers={false}
          size={12}
          mods={
            mods
          }
      />


    );
  }
}

