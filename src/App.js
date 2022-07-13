import "./App.scss";
import Footer from "./components/Include/Footer";
import Header from "./components/Include/Header";
import Index from './components/WheelHandler';
import { Routes, Route } from 'react-router-dom';
import LoginPage from "./components/Login/LoginPage";
import ResPage from "./components/Reservation/ResPage";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/reservation/" element={<ResPage/>}/>
        <Route path="/login/" element={<LoginPage/>}/>
        <Route path="/login/" element={<AboutUs/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
