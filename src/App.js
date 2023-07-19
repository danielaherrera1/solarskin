
import './App.css';
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom';

import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import NavbarExample from './layouts/navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <NavbarExample />}>
          <Route index element={ <Home />} />
          <Route path='about' element={ < About /> } />
          <Route path='contact' element={ <Contact /> } />

         <Route path='*' element={< Navigate replage to="/"/> }/>
        </Route>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
