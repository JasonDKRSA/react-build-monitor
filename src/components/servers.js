import React from "react";
import Server from "./server";

const Servers = props => (
    <span>
        <h1><u>List of servers:</u></h1>
        
        <ul className="items">
            {
                Object.keys(props.serverList).map(key => (
                    <Server 
                        key={props.serverList[key].id} 
                        server={props.serverList[key]} 
                    />
                ))
            }
        </ul>
    </span>
)

export default Servers;