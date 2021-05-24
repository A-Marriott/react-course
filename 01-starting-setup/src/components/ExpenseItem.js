import ExpensePrice from './ExpensePrice.js'
import Card from './Card.js'
import './ExpenseItem.css'

function ExpenseItem(props) {
  return(
    <Card className='expense-item'>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <ExpensePrice price={props.price}/>
      </div>
    </Card>
  );
};

export default ExpenseItem;
