import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage';
import HomePage from './Pages/HomePage/HomePage'
import LoginPage from './Pages/LoginPage/LoginPage'
import SignupPage from './Pages/SignupPage/SignupPage'
import AppointmentsPage from './Pages/AppointmentsPage/AppointmentsPage';
import InventoryPage from './Pages/InventoryPage/InventoryPage';
import RemindersPage from './Pages/RemindersPage/RemindersPage';
import AddReminderPage from './Pages/AddReminderPage/AddReminderPage';
import AddInventoryPage from './Pages/AddInventoryPage/AddInventoryPage';
import OrderMedicinesPage from './Pages/OrderMedicinesPage/OrderMedicinesPage';


function App() {
  return (
    <Routes>
      <Route path="/" exact element={<LandingPage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/signup" element={<SignupPage/>} />
      <Route path="/home/appointments" element={<AppointmentsPage/>} />
      <Route path="/home" element={<HomePage/>} />
      <Route path="/home/addReminders" element={<AddReminderPage/>} />
      <Route path="/home/inventory" element={<InventoryPage/>} />
      <Route path="/home/addInventory" element={<AddInventoryPage/>} />
      <Route path="/home/orderMedicines" element={<OrderMedicinesPage/>} />
    </Routes>
  );
}

export default App;
