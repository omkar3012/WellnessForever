import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage';
import HomePage from './Pages/HomePage/HomePage'
import LoginPage from './Pages/LoginPage/LoginPage'
import SignupPage from './Pages/SignupPage/SignupPage'

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<LandingPage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/signup" element={<SignupPage/>} />
      <Route path="/home" element={<HomePage/>} />
    </Routes>
  );
}

export default App;
