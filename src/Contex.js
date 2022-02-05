import React from "react";
/* 
跨组件通信
  Context的使用步骤： 
    1.创建constext对象
    2.创建Provider,传递value
    3.子组件使用value，三种方式：
      3.1 ContextType(只能用在类组件中，只能订阅单一的context来源，有多个的时候，后者会覆盖前者)
      3.2 useContext(函数组件,自定义hook组件，可以订阅多个context来源)
      3.3 Consumer 不限制组件的类型
*/
export const Context = React.createContext();
export const UserContext = React.createContext();
