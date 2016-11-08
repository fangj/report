import React from 'react';
import Calendar from '../calendar';
import moment from 'moment';
import _ from 'lodash';
require('./one_month.less');

export default class CalendarOneMonth extends React.Component {
  static propTypes = {
    dates: React.PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    this.handlePrevMonth=this.handlePrevMonth.bind(this);
    this.handleNextMonth=this.handleNextMonth.bind(this);
    this.state={date:moment()}
  }

  render() {
  	const {date}=this.state;
    const dates=["2016-09-01","2016-09-02","2016-09-03","2016-09-07","2016-09-08","2016-10-08","2016-11-08","2016-12-08","2017-01-08","2017-01-08","2017-02-08","2017-03-08","2017-04-08","2017-05-08","2017-06-08","2017-07-08"];
    var current_dates=_.filter(dates,(_date)=>date.isSame(_date, 'month'));
    return (
      <div className="one_month">
      	<div className="bar">
      	<a href="#" className="PreMonth" onClick={this.handlePrevMonth}>
          上个月
        </a>
        <a href="#" className="NextMonth" onClick={this.handleNextMonth}>
          下个月
        </a>
        </div>
        <Calendar dates={current_dates} date={date}/>
      </div>
    );
  }

  handlePrevMonth(){
  	const {date}=this.state;
  	this.setState({date:date.subtract(1, 'months')})
  }
  handleNextMonth(){
  	const {date}=this.state;
  	this.setState({date:date.add(1, 'months')})
  }
}
