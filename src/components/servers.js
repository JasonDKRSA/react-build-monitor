import React from "react";
import Server from "./server";

function checkUrlForDev(url){
    const devStrings = [
        "dev",
        "qa",
        "test"
    ];

    const devIndex = devStrings.map(devString => {
        return url.indexOf(devString);
    });

    const singleIndex = devIndex.reduce((prevValue, currValue) => {
        return prevValue > currValue ? prevValue : currValue;
    });

    return singleIndex;
}

const Servers = props => (
    
    <span>
        <h2><u>List of servers:</u></h2>

        <h2>Development Servers</h2>

        <hr/>

        {
            <ul className="items">
                {       
                    Object.keys(props.serverList).map(key => (

                        checkUrlForDev(props.serverList[key].url) > 0 &&

                            <Server 
                                key={props.serverList[key].id}
                                server={props.serverList[key]}
                            />
                    ))
                }
            </ul>
        }

        <h2>Production Servers</h2>

        <hr/>

        {
            <ul className="items">
                {       
                    Object.keys(props.serverList).map(key => (

                        checkUrlForDev(props.serverList[key].url) < 0 &&

                            <Server 
                                key={props.serverList[key].id}
                                server={props.serverList[key]}
                            />
                    ))
                }
            </ul>
        }

    </span>
)

export default Servers;