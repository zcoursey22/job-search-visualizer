import React, { Component } from 'react';
import * as d3 from 'd3';

class App extends Component {
  componentDidMount() {
    const square = d3.selectAll("rect");
    square.style("fill", "orange");
  }

  render() {
    return (
      <div className="App">
        <h2>Hello React</h2>
        <svg width="300px" height="150px">
          <rect x="20" y="20" width="20px" height="20" rx="5" ry="5" />
          <rect x="60" y="20" width="20px" height="20" rx="5" ry="5" />
          <rect x="100" y="20" width="20px" height="20" rx="5" ry="5"/>
        </svg>
      </div>
    );
  }
}

export default App;
