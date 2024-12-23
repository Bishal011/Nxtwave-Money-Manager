// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionsDetails, deleteTransactions} = props
  const {id, title, amount, type} = transactionsDetails

  const onDeleteTransactions = () => {
    deleteTransactions(id)
  }

  return (
    <li className="transactions-history">
      <p className="para6">{title}</p>
      <p className="para6">Rs {amount}</p>
      <p className="para6">{type}</p>

      <div className="delete-container">
        <button
          className="button1"
          type="button"
          onClick={onDeleteTransactions}
          data-testid="delete"
        >
          <img
            className="img2"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
