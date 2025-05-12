import React from 'react'
import banner from '../Assets/banner.jpg'; 
import './RentalSect.css'

const RentalSect = () => {
  return (
    <main className="rentalSect">
      <section className="bannerSection">
      <img
          src={banner}
          alt="Banner"
          className='bannerImage'
        />
        <div className="bannerContent">
          <p className="bannerTitle">Rental Section</p>
          <p className="bannerSubtitle">
            Affordable Learning Resources at Your Fingertips!
          </p>
        </div>
      </section>

      <section className="rentalGrid">
        <p className="noItemsMessage">No rental items available at the moment.</p>
      </section>
    </main>
  )
}

export default RentalSect