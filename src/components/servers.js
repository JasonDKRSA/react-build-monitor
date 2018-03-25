import React from "react";
import Server from "./server";

const Servers = props => (
    <span>
        <h1>List of servers:</h1>
        <ul>
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