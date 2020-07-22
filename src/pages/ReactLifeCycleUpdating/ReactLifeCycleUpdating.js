import React from 'react';
import './ReactLifeCycleUpdating.scss';
import { Button } from 'antd';
import Updating from './component/Updating';

class ReactLifeCycleUpdating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      textContent: 'welcome to here' 
    }
  }
  add = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }
  render() {
    return (
      <div className="updating">
        <Button onClick={this.add} type="primary" className="add">add</Button>
        <Updating count={this.state.count} content={this.state.textContent}></Updating>
      </div>
    )
  }
}
export default ReactLifeCycleUpdating