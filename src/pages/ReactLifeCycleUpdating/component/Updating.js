import React from 'react';
import './Updating.scss';

class Updating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("this.props",this.props)
  }
  //mounting---
  componentWillMount() {
    console.warn('componentWillMount',document.getElementById('sub-updating')) // null
  }
  componentDidMount() {
    console.warn('componentDidMount',document.getElementById('sub-updating')) // 
  }
  // updating--每当组件的props或者state改变的时候
  // 组件接受到新的props前触发这个方法
  componentWillReceiveProps(nextProps) {
    console.warn('componentWillReceiveProps', nextProps)
  }
  // 根据这个方法的返回值决定是否重新渲染组件，返回true重新渲染，否则不渲染
  shouldComponentUpdate(nextProps, nextState) {
    console.warn('shouldComponentUpdate', nextProps, nextState)
    return nextProps.count % 2 === 0
  }
  // 组件即将更新---
  componentWillUpdate(nextProps, nextState) {
    console.warn('componentWillUpdate', nextProps, nextState)
  }
  // getSnapshotBeforeUpdate(prevProps, prevState){
  //   console.warn('getSnapshotBeforeUpdate', prevProps, prevState);
  //   return 10;
  // }
  // 组件已经更新挂载
  componentDidUpdate(prevProps, prevState) {
    console.warn('componentDidUpdate', prevProps, prevState)
  }
  // componentDidUpdate(prevProps, prevState,snapshot) {
  //   console.warn('componentDidUpdate', prevProps, prevState,snapshot)
  // }
  render() {
    console.log('this.props1213',this.props)
    const { content, count} = this.props;
    return (
      <div id="sub-updating">
        <div className="info">update: {count}</div>
        <div className="text">接受父组件的值:{content}</div>
      </div>
    )
  }
}
export default Updating;