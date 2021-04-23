import React from 'react'
import SushiWallet from '../components/SushiWallet'
import { ViewWallet, HideWallet } from '../components/WalletButtons'

export default class WalletContainer extends React.Component {

  state = {
    visible: false
  }

  toggleVisibility = () => {
    this.setState(state => {
      return {
        visible: !state.visible
      }
    })
  }

  render() {
    let button;
    if (this.state.visible) {
      button = <HideWallet onClick={this.toggleVisibility} />
    } else {
      button = <ViewWallet onClick={this.toggleVisibility} />
    }
    return (
      <div>
        {button}
        {this.state.visible ? <SushiWallet pullFromWallet={this.props.pullFromWallet} /> : null}
      </div>
      
    )
  }
}
