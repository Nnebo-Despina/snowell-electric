import React from 'react'
import NavBar from '../components/NavBar'
import '../styles/ShopLocation.css'
import Footer from '../components/Footer'

const ShopLocation = () => {
  return (
    <>
      <NavBar />
      <section className='s1-location'>
        <div className='s1-location-box'>
          <h1>Where to find us</h1>
          <div className='s1-location-dash'></div>
          <p>Snowell Electric store is located just a short distance
            <br />from city center.
          </p>

          <div className='s1-location-address-cont'>
            <div className='s1-location-address'>
              <h1>Address</h1>
              <p>Shop 8, Unity Plaza, <br />Along Main Market Road,<br /> Enugu, Nigeria</p>
            </div>
            <div className='s1-location-tel-email'>
              <h1>Telephone</h1>
              <p>+234 806 789 4521</p>
              <br />
              <h1>Email</h1>
              <p>info@snowellelectric.com</p>
            </div>
          </div>
          <button className='s1-location-button'>Basic Directions</button>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default ShopLocation