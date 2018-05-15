import React from "react";

import '../index.css';

const Server = props => (
    
    <li>
        {props.server.status && 
            <div 
                onClick={
                    () => window.alert(
                        'The result of the last check was: ' + 
                        (
                            props.server.lastStatus === undefined ? "No previous status!" : props.server.lastStatus
                        )
                    )
                }
                className={
                    "server " + (props.server.status == "200" ? "up " : "") +
                    (props.server.status == "Error" ? "other" : "down")
                }>
                {props.server.url} <br/> status: {props.server.status}
            </div>
        }

        {!props.server.status && 
            <div className="server other">
                {props.server.url}
            </div>
        }
    </li>
)

export default Server;