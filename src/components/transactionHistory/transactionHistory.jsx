import PropTypes from 'prop-types'
import s from './TransactionHistory.module.css'

function TransactionHistory({ transactions }) {
  return (
    <table className={s.table}>
      <thead>
        <tr className={s.header}>
          <th className={s.cell}>Type</th>
          <th className={s.cell}>Amount</th>
          <th className={s.cell}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((el) => (
          <tr key={el.id} className={s.row}>
            <td className={s.cell}>{el.type}</td>
            <td className={s.cell}>{el.amount}</td>
            <td className={s.cell}>{el.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
}

export default TransactionHistory