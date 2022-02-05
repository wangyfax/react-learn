import React,{Component} from "react";
import { Context,UserContext } from "../Contex";

export default class ContextTypePage extends Component {
  static contextType = Context;
  static contextType = UserContext;
  render(){
    const {themeColor,name} = this.context;
    console.log(this.context)
    return (
       <h3 className={themeColor}>
          ContextTypePage
          <h4>{name}</h4>
        </h3>
    )
  }
}

