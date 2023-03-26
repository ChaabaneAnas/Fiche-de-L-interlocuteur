import { useReducer } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Context } from './context/context';
import FicheInterlocuteur from './Pages/fiche/FicheInterlocuteur';
import { initialState, reduerFn } from './reducers/Reducer';

function App() {
  const [state, dispatch] = useReducer(reduerFn, initialState);
  return (
    <div className='App'>
      <Context.Provider value={state}>
        <Routes>
          <Route
            path='/about'
            element={<FicheInterlocuteur dispatch={dispatch} />}
          />{' '}
          <Route path='/fiche' element={<FicheInterlocuteur />} />
          <Route
            path='/'
            element={<FicheInterlocuteur dispatch={dispatch} />}
          />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
