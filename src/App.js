import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MatrixItem from './MatrixItem'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {matrixList: []};
  }


  render() {
    return (
      <div className="App">
        <button style={{ marginRight: "30px" }} onClick={()=>this.addMatrix(3,3)}>Add Matrix 3 X 3</button>
        <button onClick={()=>this.addMatrix(3, 1)}>Add Matrix 3 X 1</button>
        <ul>
          {this.state.matrixList}
        </ul>
      </div>
    );
  }

  addMatrix = (rows, cols) => {
    const matrixList = this.state.matrixList;
    matrixList.push(<MatrixItem key={matrixList.length} matrixRows={rows} matrixCols={cols}></MatrixItem>);
    this.setState({matrixList: matrixList});

  }
}

export default App;
