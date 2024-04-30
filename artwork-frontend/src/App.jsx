import './App.css'
import Home from './pages/home'
import { Route, Routes } from 'react-router-dom'
import WorkshopResin from './pages/WorkshopResin';
import Payment from './pages/Payment';
import UsersWorkshop from './pages/UsersWorkshop';


function App() {


  return (
   <>
   <Routes>
    <Route element={<Home />} path='/' />
    <Route element={<WorkshopResin />} path='/buyworkshop' />
    <Route element={<Payment />} path='/payment' />
    <Route element={<UsersWorkshop />}  path='/yourworkshop'/>
   </Routes>
  
   </>
  )
}

export default App
