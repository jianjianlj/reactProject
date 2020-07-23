import {
  ADD_TODO,
  LOGIN_OUT
} from '../action/index';
// window.localStorage.setItem("token",""); 
let initialState = {
  loginInfo: "welcome!!!",
  token: "",
}
const todos = (state=initialState,action) => {
  let newState = Object.assign({}, state);
  if(action.type === 'ADD_TODO') {
      newState.loginInfo = action.text;
      // localStorage.setItem('__config_center_token','');
  }
  // else if(action.type === 'LOGIN_OUT')
  //   newState.loginInfo = action.text;
  // }
  return newState
}
export default todos;