import './App.css';
import { useState } from 'react';
import ProspectCard from './Features/Prospect/ProspectCard';
import { data } from './data';
import EditableField from './components/editableField/EditableField';
import StarRating from './components/starRating';
import FeedBack from './Features/Feedback/FeedBack';
import FicheInterlocuteur from './components/Pages/FicheInterlocuteur';

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
