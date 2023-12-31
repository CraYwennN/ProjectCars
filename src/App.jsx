import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage';
import Rent from './Components/Rent';
import Contact from './Components/Contact';
import Shop from './Components/shop';
import Hero from './Components/Hero';
import Buy from './Components/Buy';
import Login from './Components/Login';
import Search from './Components/Search';
import { Cars } from './cars/cars';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        
        
      </div>
      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/search" element={<Search carsData={Cars} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
