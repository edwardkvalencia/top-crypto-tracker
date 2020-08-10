import React, { Component } from 'react'
import CoinList from './components/CoinList/CoinList.jsx'
import AccountBalance from './components/AccountBalance/AccountBalance'
import ExchangeHeader from './components/Header/Header'
import styled from 'styled-components'

const Div = styled.div`
  text-align: center;
  background-color: yellow;
  color: black;

`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      balance: 10000,
      coinData: [
        { 
          name: 'Bitcoin',
          ticker:'BTC',
          price: 9999.99
        }, {
          name: 'Ethereum',
          ticker: 'ETH',
          price: 299
        }, {
          name: 'Tether',
          ticker: 'USDT',
          price: 1
        }, {
          name: 'Ripple',
          ticker: 'XRP',
          price: 0.30
        }, {
          name: 'Bitcoin Cash',
          ticker: 'BCH',
          price: 299.99
        }
      ]
    }
  }

  render() {
    return (
      <Div className="App">
        <ExchangeHeader />
        <AccountBalance amount={this.state.balance} />
        <CoinList coinData={this.state.coinData} />
        
      </Div>
    );
  }
}

export default App;
