import PropTypes from 'prop-types'
import clsx from "clsx";
import css from "./TransactionHistory.module.css"

export const TransactionHistory = ({ items }) => {
    return (
  <table className={clsx(css.transactionHistory)}>
    <thead className={clsx(css.TransactionsTitle)}>
      <tr >
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
        <tbody className={clsx(css.TransactionsValue)}>
         {items.map(({ type, amount, currency, id }) => (
        <tr key={id}>
          <td className={clsx(css.type)}>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
          ))}
        </tbody>
  </table>
    )}

    TransactionHistory.propTypes = {
      items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })).isRequired,
    }