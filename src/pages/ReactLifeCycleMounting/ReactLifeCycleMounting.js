import React from 'react';
import { Button } from 'antd';
import './ReactLifeCycleMounting.scss';

class ReactLifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      textContent: "welcome to here"
    };
  };
  componentWillMount() {
    console.warn('componentWillMount',document.getElementById('life-sycle')) // null
    this.setState({
      count: this.state.count + 1,
    })
  };
  //16.8新加的生命周期，但是之前的生命周期这是废弃，但是并未删除
  // static getDerivedStateFromProps(nextProps,prevState) {
  //   console.log('getDerivedStateFromProps',document.getElementById('life-sycle'));
  //   console.log(nextProps);
  //   prevState.count = 1;
  //   console.log(prevState);
  //   return prevState;
  // };
  componentDidMount() {
    console.warn('componentDidMount',document.getElementById('life-sycle')) // null
    const content = document.getElementById('text-content');
    content.innerHTML = 'REACT IS POPULAR!';
  };
  addCount = () => {
    this.setState({
      count: this.state.count + 1,
    })
  };
  render() {
    console.warn('render',document.getElementById('life-sycle')) // null
    return(
      <div id="life-sycle">
        <Button className="add-count" type="primary" onClick={this.addCount}>自增</Button>
        <div className="count">{this.state.count}</div>
        <div id="text-content">welcome to here</div>
      </div>
    )
  }
}
export default ReactLifeCycle;