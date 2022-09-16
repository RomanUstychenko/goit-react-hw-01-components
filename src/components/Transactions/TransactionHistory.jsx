import PropTypes from 'prop-types'
import clsx from "clsx";
import css from "./TransactionHistory.module.css"

export const TransactionHistory = ({ items }) => {
    console.log (items)
    const TransactionsItem = items.map(({ type, amount, currency }) => (
        
        <tr >
          <td className={clsx(css.type)}>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      
    ));
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
         {TransactionsItem}
         </tbody>
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