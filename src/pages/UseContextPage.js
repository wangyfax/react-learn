import React from "react";
import { Context,UserContext } from "../Contex";

export default function UseContextPage(props) {
    const theme = React.useContext(Context);
    const user = React.useContext(UserContext);
    return ( 
        <div>
            <h3 className={theme.themeColor}>UseContextPage </h3>
            <h3 className={theme.themeColor}>{user.name} </h3>
        </div>
       
    );
}