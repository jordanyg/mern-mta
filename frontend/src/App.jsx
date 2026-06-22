import React from 'react'
import Header from './components/Header'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import { Routes ,Route } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';


const App = () => {
  return (
    <div>
      <Header />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/register' element={<RegisterPage />}></Route>
      </Routes>
    </div>
  )
}

export default App
