import React from 'react';
import {Table} from 'react-bootstrap';

export default class JudgeReport extends React.Component {
  static propTypes = {
    report: React.PropTypes.object,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
    	<div>
      <table className="table  table-bordered">
		  <tr>
		    <th>标题</th>
		    <th>总分</th>
		  </tr>
		  <tr>
		    <td rowspan="2">abc</td>
		    <td>分数</td>
		  </tr>
		  <tr>
		    <td>评语</td>
		  </tr>
		</table>

		<table className="table table-bordered">
      <thead>
        <tr>
          <th>标题</th>
          <th>总分</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowspan="2">abc</td>
          <td>分数</td>
        </tr>
        <tr>
		    <td>评语</td>
		  </tr>
      </tbody>
    </table>
		</div>
    );
  }
}
