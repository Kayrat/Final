import musicFile from '../../res/mindfulness.mp3';
import React, { Component } from 'react';
import Sound from 'react-sound';

import classes from './ReactionLayer.css';

class ReactionLayer extends Component {
    state = {
        isActive: Sound.status.STOPPED
    }

    randomStopHandler = () => {
        // Will randomly pause the shit. 
    }

    onClickHandler = () => {
        if (this.state.isActive === Sound.status.STOPPED) {
            this.setState({
                isActive: Sound.status.PLAYING
            })

            const durationPeriod = Math.random() * 10

            console.log('Ayo it works.');
        }


    }

    render () {
        return (
            <div 
                className={classes.ReactionLayer}
                onClick={this.onClickHandler}>
                <Sound 
                    url={musicFile}
                    playStatus={this.state.isActive}
                    playFromPosition={0}
                />
            </div>
        );
    }
}

export default ReactionLayer;