import React from 'react'
import Header from './components/Header'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import { Routes ,Route } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import CreateOrganizationPage from './pages/CreateOrganizationPage'
import JoinOrganizationPage from './pages/JoinOrganizationPage'
import GetMembersPage from './pages/GetMembersPage'


const App = () => {
  return (
    <div>
      <Header />
      <ToastContainer />
      <Routes>
        <Route  path="/organizations/:orgId" element={<GetMembersPage />}></Route>
        <Route path='/join' element={<JoinOrganizationPage />}></Route>
        <Route path='/create' element={<CreateOrganizationPage />}></Route>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/register' element={<RegisterPage />}></Route>
      </Routes>
    </div>
  )
}

export default App
