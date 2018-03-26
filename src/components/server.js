import React from "react";

import '../index.css';

const Server = props => (
    
    <div>
        {props.server.status && 
            <div 
                className={"server " + (props.server.status == "200" ? "up " : "") +
                (props.server.status == "Error" ? "other" : "down")}>
                {props.server.url} <br/> status: {props.server.status}
            </div>
        }

        {!props.server.status && 
            <div className="server other">
                {props.server.url}
            </div>
        }
    </div>
)

export default Server;