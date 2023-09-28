import logo from './logo.svg';
import './App.css';

import { HeaderSearch } from './Componants/Header';
import Home from './Componants/Home';
import Cards from './Componants/Cards';
import Footer from './Componants/Footer';

function App() {
 
   
  
  return (
    <div className="App">
      
          <HeaderSearch/>
         <div className='main'>
          <Home/>
          <Cards/>
         </div> 
         
         <Footer/>
      
    </div>
  );
}

export default App;
