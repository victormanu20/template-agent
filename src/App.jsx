import './App.css';
import './bootstrap.css'
import Header from './templates/Header';
import Carrousel from './templates/Carrousel';
import Inmuebles from './templates/Inmuebles';
import Blog from './templates/Blog';
import About from './templates/About';
import { AppContext } from './context/AppContext.js'
import { useInitialState } from './context/context';

function App() {
  const InitialState = useInitialState();
  return (
    <AppContext.Provider value={
      InitialState
    }>
      <div className="App">
        <Header/>
        <Carrousel/>
        <Inmuebles/>
        <Blog/>
        <About/>
      </div>
    </AppContext.Provider>
  );
  }

export default App;
