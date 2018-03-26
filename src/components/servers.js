import React from "react";
import Server from "./server";

const Servers = props => (
    <span>
        <h1><u>List of servers:</u></h1>
        <div>
            {
                Object.keys(props.serverList).map(key => (
                    <Server 
                        key={props.serverList[key].id} 
                        server={props.serverList[key]} 
                    />
                ))
            }
        </div>
    </span>
)

export default Servers;