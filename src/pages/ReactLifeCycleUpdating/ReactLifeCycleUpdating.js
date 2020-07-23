import React from 'react';
import './ReactLifeCycleUpdating.scss';
import { Button } from 'antd';
import Updating from './component/Updating';
import { connect } from 'react-redux';
class ReactLifeCycleUpdating extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      count: 0,
      textContent: 'welcome to here' 
    }
    console.log('this.p',this.props)
  }
  add = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }
  componentDidMount() {
    const node = this.myRef.current
    console.log('node',node);
    console.log('this.ref',this.refs.wuwu)
  }
  render() {
    return (
      <div className="updating" ref={this.myRef}>
        <Button ref='wuwu' className="add" onClick={this.add} type="primary">add</Button>
        <Updating count={this.state.count} content={this.state.textContent}></Updating>
        <div className="router-v">显示store的值：{this.props.loginInfo}</div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
      loginInfo: state.loginInfo
  }
}
export default connect(mapStateToProps)(ReactLifeCycleUpdating);