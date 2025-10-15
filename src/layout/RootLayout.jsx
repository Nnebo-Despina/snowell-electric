import React from 'react'
import { Outlet } from 'react-router-dom'
import Ticker from '../components/Ticker'

const RootLayout = () => {
  return (
    <>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
        <Ticker />
        <Outlet />
    </>
  )
}

export default RootLayout