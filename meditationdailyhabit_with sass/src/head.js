'use strict';

class Head extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
    
            <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900" rel="stylesheet" />
                
            <link href="https://fonts.googleapis.com/css?family=Butterfly+Kids|Caveat|Miss+Fajardose|Quicksand|Sacramento|Sunshiney|Ubuntu" rel="stylesheet" />
    
            <link href="https://fonts.googleapis.com/css?family=Open+Sans|Source+Sans+Pro|Spirax|Mallanna|Mandali|Philosopher|Raleway|PT+Sans+Caption" rel="stylesheet" />
    
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous" />

            <link rel="stylesheet" href="css/style.css" />
    
            <title>Meditationdailyhabit</title>
        </div>
        );
    }
}

let domContainer = document.querySelector('#head');
ReactDOM.render(<Head />, domContainer);