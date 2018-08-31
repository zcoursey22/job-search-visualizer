import React, { Component } from 'react';
import './App.css';
import * as d3 from 'd3';
import * as topojson from 'topojson';
import styled from 'styled-components';

class App extends Component {
  componentDidMount() {
    var svg = d3.select("svg");

    var path = d3.geoPath();

    d3.json("https://d3js.org/us-10m.v1.json").then(us => {
      svg.append("g")
        .attr("class", "states")
        .selectAll("path")
        .data(topojson.feature(us, us.objects.states).features)
        .enter().append("path")
        .attr("d", path);

      svg.append("path")
        .attr("class", "state-borders")
        .attr("d", path(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; })));
    });
  }

  render() {
    const Map = styled.svg`
      > .states > path {
        fill: #ddd;
        transition: 0.2s;
      }

      > .states > path:hover {
        fill: #bdc;
      }

      > .state-borders {
        fill: none;
        stroke: #fff;
        stroke-width: 0.5px;
        stroke-linejoin: round;
        stroke-linecap: round;
        pointer-events: none;
      }
    `;

    return (
      <div className="App">
        <Map width="960px" height="600px"></Map>
      </div>
    );
  }
}

export default App;
