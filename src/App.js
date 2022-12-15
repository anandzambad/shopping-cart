//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Componants/Header';
import{Routes, Route} from 'react-router-dom';
import CardsDetails from './Componants/CardsDetails';
import Card from './Componants/Card';

function App() {
  return (
   <>
 < Header />
 <Routes>
  <Route path='/' element={<Card/>} />
  <Route path='/cart' element={<CardsDetails/>} />
 </Routes>
   </>
  );
}

export default App;
