import React from "react";
import Server from "./server";

const Servers = props => (
    <span>
        <h1>List of servers:</h1>
        <ul>
            {  
                props.serverList.map(item => (<Server url={item} />))
            }
        </ul>
    </span>
)

export default Servers;