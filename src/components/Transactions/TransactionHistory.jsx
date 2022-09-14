import PropTypes from 'prop-types'


export const TransactionHistory = ({ items }) => {
    console.log (items)
    const TransactionsItem = items.map(({ type, amount, currency }) => (
        <tbody>
        <tr>
          <td className="type">{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      </tbody>
    ));
    return (
        <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
         {TransactionsItem}
</table>
    )
    }

    TransactionHistory.propTypes = {
      items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })).isRequired,
    }