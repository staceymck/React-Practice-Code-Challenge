import React from 'react'

export const ViewWallet = (props) => {
  return (
    <button onClick={props.onClick}>
    Wallet
  </button>
  )

}

export const HideWallet = (props) => {
  return (
  <button onClick={props.onClick}>Hide wallet</button>
  )
}