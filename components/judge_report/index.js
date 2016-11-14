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
		<table className="table table-bordered">
      <thead>
        <tr>
          <th>标题</th>
          <th>总分</th>
        </tr>
      </thead>
      <tbody>
        <tr>
		    <td>abc</td>
		    <td>
			    <div>分数</div>
			    <div>评语</div>
		    </td>
		  </tr>
      </tbody>
    </table>
		</div>
    );
  }
}
