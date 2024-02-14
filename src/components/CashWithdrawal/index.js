import {Component} from 'react'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  withdrawButton = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props

    return (
      <div>
        <h1>Sarah Williams</h1>
        <ul>
          <p>your Balance</p>
          <p>{balance}</p>
          <p>Withdraw</p>
          <p>Choose sum (in rupees)</p>
          {denominationsList.map(eachItem => (
            <DenominationItem
              item={eachItem}
              key={eachItem.id}
              withdrawButton={this.withdrawButton}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default CashWithdrawal
