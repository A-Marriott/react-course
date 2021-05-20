import ExpensePrice from './ExpensePrice.js'
import './ExpenseItem.css'

function ExpenseItem(props) {

  return(
    <div className='expense-item'>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <ExpensePrice price={props.price}/>
      </div>
    </div>
  );
};

export default ExpenseItem;
