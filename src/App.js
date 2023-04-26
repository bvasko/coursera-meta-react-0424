import Header from './components/Header';
import MenuPage from './components/Menu';
import AboutLittleLemon from "./AboutLittleLemon";
import Contact from "./Contact";
import MealsProvider from './providers/MealsProvider';
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

import './App.css';


function App() {
  return (
    <MealsProvider>
    <div className="App">
      <Header title="Tiffin Menu" className="App-header" />
      <div>
        <Routes> 
          <Route path="/" element={<MenuPage />}></Route>
          <Route path="/about" element={<AboutLittleLemon />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </div>
    <Footer />
    </MealsProvider>
  );
}

export default App;
