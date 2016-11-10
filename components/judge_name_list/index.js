import React from 'react';
import {Tabs,Tab,Table} from 'react-bootstrap';
var R = require('ramda');

export default class JudgeNameList extends React.Component {
  static propTypes = {
    reports: React.PropTypes.array.isRequired, //当天所有报告，包括已批改和未批改的
  };

  constructor(props) {
    super(props);
    this.state={judged:true}
  }

  render() {
  	const {reports}=this.props;
  	const {judged}=this.state;
  	const judged_reports=R.filter(R.has('score'))(reports);
  	const unjudged_reports=R.reject(R.has('score'))(reports);

    return (
      <div>
      	 <Tabs defaultActiveKey={0}>
    	  	<Tab eventKey={0} title="未批改"> 
    	  	<Table striped bordered condensed hover>
			    <tbody>
			      {unjudged_reports.map(showUnjudgedReport)}
			    </tbody>
			  </Table>
			 </Tab>
    	  	<Tab eventKey={1} title="已批改">
    	  	<Table striped bordered condensed hover>
			    <tbody>
			      {judged_reports.map(showJudgedReport)}
			    </tbody>
			  </Table>
    	  	</Tab>
  		  </Tabs>
      </div>
    );
  }
}


const showUnjudgedReport=(report)=><tr><td>{report.name}</td></tr> 
const showJudgedReport=(report)=><tr><td>{report.name}</td><td>{report.score}</td></tr> 
