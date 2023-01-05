//import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Header from './Componants/Header';
//import{Routes, Route} from 'react-router-dom';
//import CardsDetails from './Componants/CardsDetails';
//import Cards from './Componants/Cards';
//import Modal from 'react-modal'
//import Tippy from '@tippy.js/react'
//import 'tippy.js/dist/tippy.css'
//import Countup,{useCountUp} from 'react-countup'
import IdelTimerContainer from './Componants/IdelTimerContainer'


//Modal.setAppElement('#root')
function App() {
   //const {countUp, start, reset, pauseResume, update} = useCountUp({ duration:5, end:10000})
  //const [modalIsOpen, setModalIsOpen]= useState(false)
  return (
   <>
    <IdelTimerContainer ></IdelTimerContainer>
   {/* <div>
  <h1>{countUp}</h1>
  <button onClick={start}>start</button>
  <button onClick={reset}>reset</button>
  <button onClick={pauseResume}>pauseResume</button>
  <button onClick={()=>update(2000)}>update</button>
</div> */}
 {/* < Header />
 <IdelTimerContainer />
 <Routes>
  <Route path='/' element={<Cards/>} />
  <Route path='/cart' element={<CardsDetails/>} />
 </Routes> */}
 {/* <Tippy content={'Modal Is Open'}>
<button onClick={()=>setModalIsOpen(true)}>Modal Open!</button>
</Tippy> */}
{/* <Modal isOpen={modalIsOpen} shouldCloseOnOverlayClick={false} onRequestClose={()=>setModalIsOpen(false)}>
  <h2>Modal title</h2>
  <p>Modal Body</p>
  <div>
  <button onClick={()=>setModalIsOpen(false)}>close</button>
</div>
</Modal> */}
<br />
{/* <h1><Countup end={200} /></h1> */}

   </>
  );
}

export default App;
