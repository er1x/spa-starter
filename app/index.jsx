'use strict';

import React from 'react';


class App extends React.Component {
  render() {
    return <div className="App">
              hola
           </div>;
  }
}

React.render(
  <App />,
  document.getElementById('app-container')
);
