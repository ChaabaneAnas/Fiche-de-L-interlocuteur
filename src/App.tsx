import { useReducer } from 'react';
import './App.css';
import { Context } from './context/context';
import FicheInterlocuteur from './Pages/FicheInterlocuteur';
import { initialState, reduerFn } from './reducers/Reducer';

function App() {
  const [state, dispatch] = useReducer(reduerFn, initialState);
  return (
    <div className='App'>
      <Context.Provider value={state}>
        <FicheInterlocuteur dispatch={dispatch} />
      </Context.Provider>
    </div>
  );
}

export default App;
