import React,{Component} from "react";
import { Context,UserContext } from "../Contex";
import ContextTypePage from "./ContextTypePage";
import UseContextPage from "./UseContextPage";
import ConsumerPage from "./ConsumerPage";
import { Button } from "antd";
export default class ContextPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      theme:{
        themeColor:"red"
      },
      user:{
        name:"Holin"
      }
    }
  }
  changeColor = () => {
    const {theme} = this.state;
    const {themeColor} = theme;
    this.setState({
      theme:{
        themeColor: themeColor === "red" ? "green" :"red"
      }
    })
  }
  render(){
    const {theme,user} = this.state;
    return (
      <div>
        <h3>ContextType</h3>
        <Button onClick={this.changeColor}>Click</Button>
        <Context.Provider value={theme}>
        <UserContext.Provider value={user}>
         <ContextTypePage/>
         <UseContextPage/>
         <hr/>
         <ContextTypePage/>
         <UseContextPage/>
         <hr/>
         <ConsumerPage/>
         </UserContext.Provider>
        </Context.Provider>
      </div>
    )
  }
}