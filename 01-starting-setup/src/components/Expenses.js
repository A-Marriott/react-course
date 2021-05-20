import ExpenseItem from './ExpenseItem'

function Expenses(props) {
  return(
    <div>
      <ExpenseItem title={props.data[0].title} price={props.data[0].price}/>
      <ExpenseItem title={props.data[1].title} price={props.data[1].price}/>
      <ExpenseItem title={props.data[2].title} price={props.data[2].price}/>
    </div>
  );
};

export default Expenses;
