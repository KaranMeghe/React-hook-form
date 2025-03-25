/** @format */

interface Expence {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expences: Expence[];
  onDelete: (id: number) => void;
}

const ExpenseList: React.FC<Props> = ({ expences, onDelete }) => {
  return (
    <table className='table table-bordered'>
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {expences.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              <button className='btn btn-outline-danger' onClick={() => onDelete(expense.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>

      <tfoot>
        <tr>
          <td>Total</td>
          <td></td>
          <td></td>
          <td>
            {expences.reduce((acc, expence) => {
              return acc + expence.amount;
            }, 0)}
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
