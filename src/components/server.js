import React from "react";

const Server = props => (
    <li>
        {props.server.url}
            {props.server.status && 
                <span> - status ({props.server.status})</span>
            }
    </li>
)

export default Server;