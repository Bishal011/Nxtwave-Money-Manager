// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props

  return (
    <div className="money-details-container">
      <div className="balance-container">
        <img
          className="img1"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div>
          <p className="para1">Your Balance</p>
          <p className="para2" data-testid="balanceAmount">
            Rs {balanceAmount}
          </p>
        </div>
      </div>

      <div className="income-container">
        <img
          className="img1"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
          alt="income"
        />
        <div>
          <p className="para1">Your Income</p>
          <p className="para2" data-testid="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </div>

      <div className="expenses-container">
        <img
          className="img1"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div>
          <p className="para1">Your Expenses</p>
          <p className="para2" data-testid="expensesAmount">
            Rs {expensesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
