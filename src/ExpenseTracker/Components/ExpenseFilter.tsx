/** @format */

interface Props {
  onSelectCategory: (category: string) => void;
  Categories: string[];
}

const ExpenseFilter: React.FC<Props> = ({ onSelectCategory, Categories }) => {
  return (
    <select className='form-select my-5' onChange={(event) => onSelectCategory(event.target.value)}>
      <option value=''>All Categories</option>
      {Categories.map((category) => {
        return (
          <option value={category} key={category}>
            {category}
          </option>
        );
      })}
    </select>
  );
};

export default ExpenseFilter;
