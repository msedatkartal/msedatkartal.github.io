import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from './pages/HomePage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import LaptopPage from './pages/LaptopPage';
import AsusLaptop from './pages/AsusLaptop';
import Sepet from './pages/Sepet';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} Component={HomePage} />
          <Route path={"/laptop"} Component={LaptopPage}/>
          <Route path={"/asus"} Component={AsusLaptop} />
          <Route path={"/sepet"} Component={Sepet}/>
         </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
