import React from 'react';
import ReactDOM from 'react-dom';
import request from 'request';

import Servers from './components/servers';

class App extends React.Component {
    state = {
        endPoints: [
            {
                "id": 0,
                "url": "https://test.cognitioncom/api/status",
                "status": undefined,
                "lastStatus": undefined,
            },
            {
                "id": 1,
                "url": "https://ord.dev.stackworx.io/health",
                "status": undefined,
                "lastStatus": undefined,
            },
            {
                "id": 2,
                "url": "https://api.durf.dev.stackworx.io/health",
                "status": undefined,
                "lastStatus": undefined,
            },
            {
                "id": 3,
                "url": "https://prima.run/health",
                "status": undefined,
                "lastStatus": undefined,
            },
            {
                "id": 4,
                "url": "https://stackworx.io/",
                "status": undefined,
                "lastStatus": undefined,
            },
            // Test servers
            {
                "id": 5,
                "url": "https://httpstat.us/404",
                "status": undefined,
                "lastStatus": undefined,
            },
            {
                "id": 6,
                "url": "https://httpstat.us/300",
                "status": undefined,
                "lastStatus": undefined,
            },
            {
                "id": 7,
                "url": "https://httpstat.us/203",
                "status": undefined,
                "lastStatus": undefined,
            },
        ],
        checkNumber: 0
    }

    fetchStatus(){
        var copyState = Object.assign({}, this.state);

        Object.keys(copyState.endPoints).map(key => (
            request(copyState.endPoints[key].url)
            .on('response', response => {
                copyState.endPoints[key].lastStatus =
                    this.state.checkNumber ?
                    copyState.endPoints[key].status :
                    "";
                copyState.endPoints[key].status = response.statusCode;
                this.setState(copyState);
            })
            .on('error', error => {
                copyState.endPoints[key].lastStatus =
                    this.state.checkNumber ?
                    copyState.endPoints[key].status :
                    "";
                copyState.endPoints[key].status = 'Error';
                this.setState(copyState);
            })
        ))

        copyState.checkNumber++;
        this.setState(copyState)
    }

    componentDidMount(){
        this.fetchStatus();
        const timerId = setInterval(
            () => this.fetchStatus(),
            300000
        )
    }

    render() {
        return (
            <div>
                <nav className="nav">
                    <h1>> Build Monitor</h1>
                </nav>
                
                <section className="items">
                    <Servers 
                        key={this.state.endPoints.id} 
                        serverList={this.state.endPoints}
                    />
                </section>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
