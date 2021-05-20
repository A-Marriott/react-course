function ExpensePrice(props) {
  const doubledPrice = props.price * 2;
  return(
    <div className='expense-item__price'>{doubledPrice}</div>
  );
}

export default ExpensePrice
