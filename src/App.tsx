import ProspectCard from './components/Prospect/ProspectCard';
import './App.css';
import { data } from './data';
function App() {
  return (
    <div className='App'>
      <ProspectCard person={data[1]} />
    </div>
  );
}

export default App;
