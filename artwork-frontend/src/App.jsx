import './App.css'
import Home from './pages/home'
import { Route, Routes } from 'react-router-dom'
import WorkshopResin from './pages/WorkshopResin';
import Payment from './pages/Payment';
import UsersWorkshop from './pages/UsersWorkshop';
import HomePage from './pages/products/HomePage';
import TermsAndConditions from './components/TermsandConditions';
import Refunds from './components/Refunds';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {


  return (
   <>
   <Routes>
    <Route element={<Home />} path='/' />
    <Route element={<WorkshopResin />} path='/buyworkshop' />
    <Route element={<Payment />} path='/payment' />
    <Route element={<UsersWorkshop />}  path='/yourworkshop'/>
    <Route element={<HomePage />} path='/products' />
    <Route element={<TermsAndConditions />} path='/termsandconditions' />
    <Route element={<Refunds />} path='/refunds' />
    <Route element={<PrivacyPolicy />} path='/privacypolicy' />
   </Routes>
  
   </>
  )
}

export default App
