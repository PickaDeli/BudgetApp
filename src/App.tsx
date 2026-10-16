import './App.css'
import type { Transaction } from './Types';

function App() {

  // Remember to use . not , in numbers. Ex 10.50.
  const transactions : Transaction[] = [
    { id: 1, date: '2026-10-02', description: 'Vet', category: 'Health', amount: 180, type: 'expense' },
    { id: 2, date: '2026-15-02', description: 'Doctor', category: 'Health', amount: 107, type: 'expense' },
    { id: 3, date: '2026-10-03', description: 'Shoes', category: 'Clothes', amount: 150, type: 'expense' },
    
  ];

  const listTransactions = transactions.map(t =>
    <li key={t.id}>
      {t.date} - {t.description} ({t.category}): {t.amount} €, {t.type}
    </li>
  );

  return (
    <>
      <h1>BudgetApp!</h1><br></br>
      <li>{listTransactions}</li>
    </>
  )
}

export default App
