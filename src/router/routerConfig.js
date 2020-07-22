import Home from '../components/User';
import User from '../components/User';
import UserList from '../components/User/UserList';
import UserAdd from '../components/User/UserAdd';
import UserEdit from '../components/User/UserEdit.js';
import Shop from '../components/Shop';
import News from '../components/News';
import Login from '../pages/login/login';
import Error from '../pages/Error/Error';
import BindThisOrEs6 from '../pages/BindThisOrEs6/BindThisOrEs6';
import ReactLifeCycleMounting from '../pages/ReactLifeCycleMounting/ReactLifeCycleMounting';
import ReactLifeCycleUpdating from '../pages/ReactLifeCycleUpdating/ReactLifeCycleUpdating';
let routerConfig = [
    {
      path: "/",
      component: Home,
      exact:true,
      name: "首页",
      auth: true,
      children:[],
    },
    {
      path: "/BindThisOrEs6",
      component: BindThisOrEs6,
      name: "示例一：bind/this",
      children:[],
      auth: true,
    },
    {
      path: "/login",
      component: Login,
      name: "登录",
      children:[],
    },
    {
      path: "/404",
      component: Error,
      name: "报错",
      children:[],
    },
    // {
    //   path: "/user",
    //   component: User,
    //   name: "用户",
    //   children:[   /*嵌套路由*/
    //     {
    //       path: "/user/",
    //       component: UserList,
    //       name: "用户",
    //       auth: true,
    //     },
    //     {
    //       path: "/user/add",
    //       component: UserAdd,
    //       name: "增加",
    //       auth: true,
    //     },
    //     {
    //       path: "/user/edit",
    //       component: UserEdit,
    //       name: "编辑",
    //       auth: true,
    //     }
    //   ]
    // },
    {
      path: "/ReactLifeCycleMounting",
      component: ReactLifeCycleMounting,
      name: "示例二：Mounting",
      auth: true,
      children:[],
    },
    {
      path: "/ReactLifeCycleUpdating",
      component: ReactLifeCycleUpdating,
      name: "示例三：Updating",
      auth: true,
      children:[],
    }
];
export {
  routerConfig,
}