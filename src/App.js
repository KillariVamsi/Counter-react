import React, { Component } from 'react'
import "./App.css"


class App extends Component {
  state = {
    count: 0
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 })
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 })
  }

  reset = () => {
    this.setState({ count: 0 })
  }

  render() {
    return (
      <div className='container text-center' >
        <div className='row'>
          <div  id='counter' className='col bg-black border rounded-4 text-light p-4' >
            <h1> Counter</h1>
            <input type='button' onClick={this.increment} value={"Increase"} className="btn btn-success m-2 mt-3" />
            <p className='m-2'> <b>{this.state.count}</b></p>
            <input type='button' onClick={this.decrement} value={"Decrease"} className="btn btn-danger m-2 mt-3" /> <br /><br />
            <input type='button' onClick={this.reset} value={"Reset"} className='btn btn-warning m-2'/>
          </div>
        </div>
      </div> 
    )
  }
}

export default App;
