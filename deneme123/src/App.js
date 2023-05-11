import {BrowserRouter,Routes,Route} from "react-router-dom"
import HomePage from './pages/HomePage';
import './App.css';
import KayitPage from "./pages/KayitPage";
import LoginPage from "./pages/LoginPage";
import Teachers from "./pages/Teachers";
import HakkimizdaPage from "./pages/HakkimizdaPage";
import EkibimizPage from "./pages/EkibimizPage";
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path={"/"} Component={HomePage} />
      <Route path={"/kayit"} Component={KayitPage}/>
      <Route path={"/login"} Component={LoginPage}/>
      <Route path={"/teacher"} Component={Teachers} />
      <Route path={"/hakk"} Component={HakkimizdaPage}/>
      <Route path={"/ekip"} Component={EkibimizPage}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;
