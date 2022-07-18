import "./App.scss";
import Footer from "./components/Include/Footer";
import Header from "./components/Include/Header";
import Index from "./components/mainIndexComponents/WheelHandler";
import { Routes, Route } from 'react-router-dom';
import DiningIndex from "./components/Dining/DiningIndex";
import ResPage from "./components/detail/ResPage";
import AboutUs from "./components/detail/AboutUs";
import RoomsDetail from "./components/detail/RoomsDetail";
import TopBtn from "./components/mainIndexComponents/TopBtn";
import SignUpContainer from "./components/Container/SignUpContainer";
import LoginContainer from "./components/Container/LoginContainer";



function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/reservation" element={<LoginContainer/>}/>
        <Route path="/reservation" element={<LoginContainer/>}/>
        <Route path="/aboutus" element={<AboutUs />}/>
        <Route path="/rooms" element={<RoomsDetail />} />
        <Route path="/dining" element={<DiningIndex/>} />
        <Route path="/membership" element={<SignUpContainer/>} />
      </Routes>
      <TopBtn/>
      <Footer/>
    </div>
  );
}

export default App;
