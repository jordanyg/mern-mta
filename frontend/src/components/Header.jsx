import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'

const Header = () => {
  return (
    <header className="w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
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
    </header>
  )
}

export default Header
