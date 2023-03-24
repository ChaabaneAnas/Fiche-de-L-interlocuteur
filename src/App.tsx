import './App.css';
import { useState } from 'react';
import FicheInterlocuteur from './Pages/FicheInterlocuteur';

function App() {
  const [value, setValue] = useState('Hello');
  function handleSave(value: string): void {
    setValue(value);
  }

  return (
    <div className='App'>
      <FicheInterlocuteur />
    </div>
  );
}

export default App;
