import PropTypes from 'prop-types';
import './transactionHistory.css';

export default function TransactionHistory({ transactions }) {
  return (
    <table className="table_main">
      <thead className="tadle_head">
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => {
          const { id, type, amount, currency } = transaction;
          return (
            <tr key={id}>
              <td className="table_val">{type}</td>
              <td className="table_val">{amount}</td>
              <td className="table_val">{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    }),
  ),
};
