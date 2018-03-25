import React from "react";

import Server from "./server";

const Servers = props => (
    <span>
        <h1>List of servers:</h1>
        <ul>
            <Server />
            <Server />
            <Server />
        </ul>
    </span>
)

export default Servers;