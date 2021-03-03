import './App.css';
import Navbar from './components/Navbar.js'
import Model3 from './components/carpage/Model3'
import ModelS from './components/carpage/ModelS'
import ModelX from './components/carpage/ModelX'
import ScrollToTop from './ScrollToTop'
import React from 'react';
import {useEffect,useState} from 'react'
import {
    BrowserRouter,
    Route,
} from 'react-router-dom'
import Recharge from './components/carpage/Recharge'
import ModelY from './components/carpage/ModelY';
import Powerwall from './components/carpage/Teslawall';
import LoadingPage from './LoadingPage'
import MainPage from './components/carpage/MainPage';
function App() {
  const [loading,setLoading] =useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(()=>{
    setLoading(false)
    },1000)
  },[])
  return (
  <BrowserRouter>
    <div className="App">
    <ScrollToTop />
    {
      loading ? <LoadingPage /> :
      <div> 
      <Route exact path="/">
       <MainPage />
      </Route>
       <Navbar />
       <Route path="/modelS" >
         <ModelS />
       </Route>
       <Route path="/model3">
         <Model3 />
       </Route>
       <Route path="/modelX">
         <ModelX />
       </Route>
       <Route path="/modelY">
         <ModelY />
       </Route>
       <Route path="/powerwall">
         <Powerwall />
       </Route>
       <Route path="/recharger">
         <Recharge />
       </Route>
       </div>
      }
         

    </div>
    </BrowserRouter>
  );
}

export default App;
