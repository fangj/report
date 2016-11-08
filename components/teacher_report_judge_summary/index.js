import React from 'react';
import CalendarOneMonth from '../calendar_one_month';
import ReportList from '../report_list';
export default class TeacherReportJudgeSummary extends React.Component {
  static propTypes = {
    getReportDates:React.PropTypes.func.isRequired,
    getReportsByDate:React.PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state={}
  }

  componentDidMount() {
  	const {getReportDates}=this.props;
  	getReportDates().then(dates=> {
  		this.setState({dates})
  	})
  }

  render() {
  	const {dates}=this.state;
  	if(!dates){
  		return null;
  	}
    return (
    	<div>
      <CalendarOneMonth dates={dates}/>
      </div>
    );
  }
}
