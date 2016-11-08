import React from 'react';
import CalendarOneMonth from '../calendar_one_month';

export default class TeacherReportJudgeSummary extends React.Component {
  static propTypes = {
    dates: React.PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
  	const {dates}=this.props;
    return (
      <CalendarOneMonth dates={dates}/>
    );
  }
}
