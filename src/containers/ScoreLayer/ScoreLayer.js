import React, { Component } from 'react';
import Sound from 'react-sound';

import classes from './ScoreLayer.css';

class ScoreLayer extends Component {
    render() {
        return (
            <div className={classes.ScoreLayer}>
                Click anywhere in the orange layer to begin.
            </div>
        );
    }
}

export default ScoreLayer;