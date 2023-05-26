import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Restaurant from './components/Restaurant';
import Restview from './components/Restview';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      
  <Routes>
        <Route path='/' element={<Restaurant>  </Restaurant>}></Route>
        <Route path='/view-restaurant/:id' element={<Restview/>}></Route>

  </Routes> 

     <Footer/>
    </div>
  );
}

export default App;