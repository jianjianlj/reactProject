import React from 'react'
import { Button } from 'antd';
import { connect } from 'react-redux';
import { addTodo } from '../../store/action/index'
import './ReactRedux.scss'
class ReactRedux extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {
    console.log('this.props-->redux',this.props)
  }
  render() {
    return (
      <div className="react-router">
        <Button type="primary" onClick={this.props.changeValue}  className="router-btn">修改store的值</Button>
        <Button type="primary" onClick={this.props.clearValue}  className="router-btn">清空</Button>
        {/* <Button onClick={this.props.clearValue}  className="router-btn">清空</Button> */}
        <div className="router-info">{this.props.loginInfo}</div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
      loginInfo: state.loginInfo
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      changeValue() {
        dispatch(addTodo("123131"))
      },
      clearValue() {
        dispatch(addTodo(""))
      }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ReactRedux);