import ExpenseItem from './ExpenseItem'
import Card from './Card.js'

function Expenses(props) {
  return(
    <Card>
      <ExpenseItem title={props.data[0].title} price={props.data[0].price}/>
      <ExpenseItem title={props.data[1].title} price={props.data[1].price}/>
      <ExpenseItem title={props.data[2].title} price={props.data[2].price}/>
    </Card>
  );
};

export default Expenses;
