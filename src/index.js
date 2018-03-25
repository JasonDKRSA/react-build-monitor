import React from 'react';
import ReactDOM from 'react-dom';
import request from 'request';

import Servers from './components/servers';

class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         endPoints: [
    //             {
    //                 "id": 0,
    //                 "url": "https://test.cognition-app.com/api/status",
    //                 "status": null,
    //             },
    //             {
    //                 "id": 1,
    //                 "url": "https://ord.dev.stackworx.io/health",
    //                 "status": null,
    //             },
    //             {
    //                 "id": 2,
    //                 "url": "https://api.durf.dev.stackworx.io/health",
    //                 "status": null,
    //             },
    //             {
    //                 "id": 3,
    //                 "url": "https://prima.run/health",
    //                 "status": null,
    //             },
    //             {
    //                 "id": 4,
    //                 "url": "https://stackworx.io/",
    //                 "status": null,
    //             },
    //         ]
    //     }
    // }

    render() {
        return (
            <div>
                <h1>Build Monitor</h1>
                <div>
                    <Servers />
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
