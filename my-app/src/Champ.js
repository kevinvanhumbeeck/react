import React from 'react';

const champions = require("./samples/champions.json");

class Champ extends React.Component {
    constructor(props) {
        super(props);
        this.stats = champions[props.id];
    }

    render() {
        return (
            <div className="champ">
                <div className="name">Name:</div>
                <div className="value">{this.stats.name}</div>
            </div>
        );
    }
}

export default Champ