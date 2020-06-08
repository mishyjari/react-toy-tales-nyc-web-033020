import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import data from './data'


class App extends React.Component{

  state = {
    toys: [],
    display: false
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  fetchToys = () => {
    fetch('http://localhost:3000/toys')
    .then(res => res.json())
    .then(toys => this.setState({toys}))
  }

  componentDidMount(){
    this.fetchToys()
  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm update={this.fetchToys} />
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys} update={this.fetchToys} />
      </>
    );
  }

}

export default App;
