'use strict';

import React from 'react';

import Timer from './components/timer/index.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Timer />
      </div>
    );
  }
}

React.render(
  <App />,
  document.getElementById('app-container')
);
