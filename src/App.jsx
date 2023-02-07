import './App.css';
import './bootstrap.css'

import Home from './pages/Home';
import { AppContext } from './context/AppContext.js'
import { useInitialState } from './context/context';

function App() {
  const InitialState = useInitialState();
  return (
    <AppContext.Provider value={
      InitialState
    }>
      <div className="App">

        <Home/>
      </div>
    </AppContext.Provider>
  );
  }

export default App;
