import "./App.scss";
import Footer from "./components/Include/Footer";
import Header from "./components/Include/Header";
import Index from "./components/mainIndexComponents/WheelHandler";
import { Routes, Route } from 'react-router-dom';
import DiningIndex from "./components/Dining/DiningIndex";
import LoginPage from './components/Login/LoginPage';
import ResPage from "./components/detail/ResPage";
import AboutUs from "./components/detail/AboutUs";
import RoomsDetail from "./components/detail/RoomsDetail";



function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/reservation/" element={<ResPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/login" element={<AboutUs />}/>
        <Route path="/rooms" element={<RoomsDetail />} />
        <Route path="/dining" element={<DiningIndex/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
