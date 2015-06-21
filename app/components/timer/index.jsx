'use strict';

import React from 'react';


export default class Timer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      timer: new Date()
    };

    setInterval(() => {
      this.setState({
        timer: new Date()
      });
    }, 1000);
  }
  render(){
    return (
      <div className="Timer">
        {this.state.timer.toLocaleString()}
      </div>
    );
  }
}
