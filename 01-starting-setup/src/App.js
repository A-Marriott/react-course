import Expenses from './components/Expenses.js'

function App() {
  const expenses = [
    { title: 'Car insurance', price: 267.13},
    { title: 'MOT', price: 132.16},
    { title: 'Exhaust', price: 50.31}
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses data={expenses} />
    </div>
  );
}


export default App;
