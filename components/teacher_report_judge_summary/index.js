import React from 'react';
import Calendar from '../calendar';

export default class TeacherReportJudgeSummary extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
  	const dates=["2016-09-01","2016-09-02","2016-09-03","2016-09-07","2016-09-08","2016-10-08"];
    return (
      <div>
      	<a href="#" className="prevMonth" onClick={this.handlePrevMonth}>
          Prev Month
        </a>
        <a href="#" className="nextMonth" onClick={this.handleNextMonth}>
          Next Month
        </a>
        <Calendar dates={dates}/>
      </div>
    );
  }
}
