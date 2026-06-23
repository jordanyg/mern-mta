import React from 'react'
import Hero from '../components/Hero'
import LoggedInUserDisplay from '../components/LoggedInUserDisplay'
import { useSelector } from 'react-redux'

const HomePage = () => {

  const {userInfo} = useSelector((state)=>state.auth)

  return (userInfo ? (<LoggedInUserDisplay />) : (<Hero />)
    
  )
}

export default HomePage
