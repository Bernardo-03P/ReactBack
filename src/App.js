//import React from 'react';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Home from './PAGES/Home';
// import Sobre from './componentes/Sobre'
// import Serviços from './componentes/Serviços'
// import Cases from  './componentes/Cases'
// import Metodo from './componentes/Metodo'
// import Depoimento from './componentes/Depoimento'
// import Footer from './componentes/Footer'
// import Backpointer from './componentes/Backpointer'
import Header from './componentes/Header';
import Depoi from './componentes/depoimentos.js'


;

function App() {

    return (
        <div>
           <Header/>
           <Depoi/>
           {/* <Home/>
           <Sobre/>
           <Serviços/>
           <Cases/>
           <Metodo/>
           <Depoimento/>
           <Footer/>
           <Backpointer/> */}
        </div>
    );
}

export default App;
