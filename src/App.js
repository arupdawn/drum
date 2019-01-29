import React, { Component } from 'react';

import './App.css';
import 'C:/reactjs/drum/node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import Grids from './Components/Grids';


class App extends Component {


  render() {

    return (
      <div className="App">

            <Grids className="Grids_styling" />
      </div>

    );
  }
}

export default App;
