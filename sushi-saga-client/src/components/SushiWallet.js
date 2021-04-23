import React from 'react'

export default class SushiWallet extends React.Component {

  state = {
    available: 150,
    withdrawal: 0
  }

  handleChange = (e) => {
    if (e.target.value > this.state.available) {
      alert("Not enough funds")
    } else {
      this.setState({
        withdrawal: e.target.value
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.pullFromWallet(this.state.withdrawal)
    this.setState(state => {
      return {
        available: state.available - this.state.withdrawal,
        withdrawal: ""
      }
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Get money from wallet</h1>
          <h2>Total available: ${this.state.available}</h2>
          <label htmlFor="amount">Amount:</label><br></br>
          <input type="number" name="amount" onChange={this.handleChange} value={this.state.withdrawal} placeholder="Select amount"></input>
          <input type="submit" />
        </form>
      </div>
    )
  }

}