
import './App.css';
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom';
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import NavbarExample from './layouts/navbar';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Navbar } from 'react-bootstrap';
import ItemListContainer from './components/ItemListContainer';
import { CartProvider } from './layouts/CartContext';
import Carrito from './components/Carrito';
import Checkout from './layouts/Checkout';


function App() {

  return (
    <div className="App">

      <CartProvider>
      
      <BrowserRouter>
      
      <Navbar/>
      
      <Routes>
          <Route path='/' element={ <NavbarExample />}>
          <Route index element={ <Home />} />
          <Route path='/about' element={ <ItemListContainer/> } />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/contact'  element={<Contact/>}/>
          <Route path='/carrito'  element={<Carrito />}/>
          <Route path='/checkout'  element={<Checkout />}/>
          <Route path='*' element={< Navigate replage to="/"/> }/>
        </Route>
      </Routes>
       
      
      </BrowserRouter>
     </CartProvider>
    </div>
  );

}



export default App;
