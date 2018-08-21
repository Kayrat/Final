import React, { Component } from 'react';

import ReactionLayer from './containers/ReactionLayer/ReactionLayer';
import ScoreLayer from './containers/ScoreLayer/ScoreLayer';

import classes from './App.css';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <ReactionLayer />
        <ScoreLayer />
      </div>
    );
  }
}

export default App;
