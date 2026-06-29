import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { logout } from '../slices/authSlice'
import { useLogoutMutation } from '../slices/usersApiSlice'
import { useNavigate } from 'react-router-dom'
import { useDispatch ,useSelector } from 'react-redux'
import {toast} from 'react-toastify'




const Header = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [logoutApi] = useLogoutMutation()

  const {userInfo} = useSelector((state)=>state.auth)

  const logoutHandler = async(e)=>{
    e.preventDefault()
    try {
      await logoutApi().unwrap()
      dispatch(logout())
      navigate('/')
    } catch (err) {
     toast.error(err?.data?.message || err.error) 
    }
  }

  return ( userInfo ? (<header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
  
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-semibold tracking-tight text-gray-900"
          >
            Multi tenancy app
          </Link>
  
          {/* Navigation */}
          <div className="flex items-center gap-5">
  
            {/* Categories Dropdown */}
            
  
            {/* New Entry Button */}
            
  
            {/* Profile */}
            <div className="group relative">
    
    {/* User Button */}
    <button className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-[#f8f6f2] px-5 py-3 text-sm font-medium text-gray-700 shadow-sm transition hover:border-gray-300 hover:bg-white">
      
      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white text-xs font-bold text-gray-700 shadow-sm">
        {userInfo.name.charAt(0).toUpperCase()}
      </div>
  
      <span>{userInfo.name}</span>
  
      <ChevronDown className="h-4 w-4 text-gray-500" />
    </button>
  
    {/* Dropdown */}
    <div className="invisible absolute right-0 mt-3 w-52 translate-y-2 rounded-3xl border border-gray-100 bg-white/95 p-2 opacity-0 shadow-2xl backdrop-blur-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
  
      
  
      <button
        onClick={logoutHandler}
        className="flex w-full items-center rounded-2xl px-4 py-3 text-left text-sm font-medium text-red-500 transition hover:bg-red-50"
      >
        Logout
      </button>
    </div>
  </div>
          </div>
        </div>
      </header>) : (<header className="w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-semibold tracking-tight text-gray-800"
        >
          Multi-tenancy-app
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-3">
          <Link
            to="/login"
            className="rounded-xl px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-xl bg-gray-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-gray-700"
          >
            Register
          </Link>
        </nav>
      </div>
    </header>)
    
  )
}

export default Header
