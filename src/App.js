import logo from './logo.svg';
import './App.css';

import { HeaderSearch } from './Componants/Header';
import Home from './Componants/Home';
import Cards from './Componants/Cards';

function App() {
  return (
    <div className="App">
      
          <HeaderSearch/>
         <div className='main'>
          <Home/>
          <Cards/>
         </div> 
      
    </div>
  );
}

export default App;
