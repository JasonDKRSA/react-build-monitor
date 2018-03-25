import React from 'react';
import ReactDOM from 'react-dom';
import request from 'request';

import Servers from './components/servers';

class App extends React.Component {
    state = {
        endPoints: [
            "https://ord.dev.stackworx.io/health",
            "https://test.cognition-app.com/api/status",
            "https://api.durf.dev.stackworx.io/health",
            "https://prima.run/health",
            "https://stackworx.io/",
        ]
    }

    render() {
        return (
            <div>
                <h1>Build Monitor</h1>
                <div>
                    <Servers serverList={this.state.endPoints}/>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
