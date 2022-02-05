import React,{Component} from "react";
import { Context,UserContext } from "../Contex";

export default class ConsumerPage extends Component{
    render(){
        return (
            <div>
                <h3>ConsumerPage</h3>
                <Context.Consumer>
                    {
                        theme => {
                            return (
                                <div className={theme.themeColor}>omg
                                <UserContext.Consumer>
                                    {
                                     user=><p>{user.name}</p>
                                    }
                                </UserContext.Consumer>
                                </div>
                            )
                        }
                    }
                </Context.Consumer>
            </div>
        )
    }
}