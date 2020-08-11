import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    index: 0,
    balance: 100
  }

  componentDidMount() {
    fetch(API)
    .then(r => r.json())
    .then(data => this.setState({sushis: data}))
  }

  displaySushi = () => {
    let i = this.state.index
    i = i % this.state.sushis.length
    return this.state.sushis.slice(i, i + 4)
  }

  moreSushi = () => {
    let i = this.state.index
    this.setState({index: i + 4})
  }

  eatSushi = (id, price) => {
    let newBalance = this.state.balance - price
    if (newBalance < 0) {
      alert("You don't have enough money!!!")
      return
    }

    let newSushis = this.state.sushis.map(sushi => {
      if (sushi.id === id) { sushi.eaten = true }
      return sushi
    })

    this.setState({sushis: newSushis, balance: newBalance})
  }

  addMoney = (amount) => {
    let newBalance = this.state.balance + amount
    this.setState({balance: newBalance})
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushis={this.displaySushi()}
          moreSushi={this.moreSushi}
          eatSushi={this.eatSushi}
        />
        <Table 
          balance={this.state.balance}
          plates={this.state.sushis.filter(sushi => sushi.eaten)}
          addMoney={this.addMoney}
        />
      </div>
    );
  }
}

export default App;