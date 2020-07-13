import React from 'react';
import './Error.scss'
export default class Error extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return(
      <div className="error-page">出错了！！！</div>
    )
  }
}
