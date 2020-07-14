import React from 'react';
import './BindThisOrEs6.scss';
import { Button, Input } from 'antd';
class BindThisOrEs6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bindData: '',
      es6Data: ''
    }
    //bind的第一个参数是this指向，第二个参数是传入的数据
    // call, apply -- 立即执行 call (this,'参数一' ...) apply 参数（this,[]）;
    this.bindOnClick = this.bindOnClick.bind(this);
  };
  bindOnClick() {
    console.log ('bind-this',this)
  };
  es6OnClick = () => {
    console.log('es6-this',this)
  };
  render() {
    return (
      <div className="bind-es6">
        <div className="bind">
          <Button className="bind-btn btn" onClick={this.bindOnClick} type="primary">bind</Button>
          {/* <Button onClick="this.bindOnClick.bind(this)" type="primary">bind</Button> */}
          {/* <div className="bind-content content-font">bind:{this.state.bindData}</div> */}
        </div>
        <div className="es6">
          <Button className="es6-btn btn" onClick={this.es6OnClick} type="primary">es6</Button>
          {/* <Button onClick={() => this.es6OnClick} type="primary">es6</Button> */}
          {/* <div className="es6-content content-font">es6:{this.state.es6Data}</div> */}
        </div>
      </div>
    );
  }
}
export default BindThisOrEs6;