import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import SushiWallet from './components/SushiWallet';
import WalletContainer from './containers/WalletContainer';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [],
    eaten: [],
    sushiIndex: 0,
    money: 100
  }

  pullFromWallet = (amt) => {
    this.setState(state => {
      return{
        money: state.money + parseInt(amt)
      }
    })
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(json => {
      this.setState({
        sushi: json
      })
    })
  }

  pay = (sushi) => {
    if(this.state.money - sushi.price >= 0) {
      this.setState(state => {
        return {
          money: state.money - sushi.price
        }
      })
    }
  }

  eat = (sushi) => {
    if(this.state.money - sushi.price >= 0) {
      this.setState(state => {
        return {
          money: state.money - sushi.price,
          eaten: [...state.eaten, sushi]
        }
      })
    } else {
      alert("Sorry, not enough money!")
    }
  }
  
  advance = () => {
    this.setState(state => {
      return {
        sushiIndex: state.sushiIndex + 4
      }
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushiIndex={this.state.sushiIndex} advance={this.advance} sushi={this.state.sushi} eaten={this.state.eaten} eat={this.eat} />
        <Table eaten={this.state.eaten} money={this.state.money} />
        <WalletContainer pullFromWallet={this.pullFromWallet} />
      </div>
    );
  }
}

export default App;