import React from 'react';
import Calendar from '../calendar';
import moment from 'moment';
import _ from 'lodash';

export default class CalendarOneMonth extends React.Component {
  static propTypes = {
    dates: React.PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    this.handlePrevMonth=this.handlePrevMonth.bind(this);
    this.handleNextMonth=this.handleNextMonth.bind(this);
    this.state={month:moment().month()}
  }

  render() {
  	const {month}=this.state;
    const dates=["2016-09-01","2016-09-02","2016-09-03","2016-09-07","2016-09-08","2016-10-08"];
    var current_dates=_.filter(dates,(date)=>moment(date).month()===month);
    return (
      <div>
      	<a href="#" className="prevMonth" onClick={this.handlePrevMonth}>
          Prev Month
        </a>
        <a href="#" className="nextMonth" onClick={this.handleNextMonth}>
          Next Month
        </a>
        {current_dates.length>0?<Calendar dates={current_dates}/>:(month+1)+"月无内容"}
      </div>
    );
  }

  handlePrevMonth(){
  	const {month}=this.state;
  	this.setState({month:(month-1+12)%12})
  }
  handleNextMonth(){
  	const {month}=this.state;
  	this.setState({month:(month+1)%12})
  }
}
