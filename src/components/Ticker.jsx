import React, { useEffect, useState } from 'react'
import '../styles/Ticker.css'

const Ticker = () => {
    const [dateTime, setDateTime] = useState(new Date());
    const [location, setLocation] = useState("Fetching Location...");

    useEffect(() => {
        const interval = setInterval(() =>
        setDateTime(new Date()), 1000);

        navigator.geolocation.getCurrentPosition((pos) => {
            const { latitude, longitude } = pos.coords;
            setLocation(`Lat: ${latitude.toFixed(2)}, Lon: ${longitude.toFixed(2)}`)
        }, () => setLocation("Location not Available"))

        return () => clearInterval(interval);
    }, [])
  return (
    <>
        <div className="ticker-cont">
            {dateTime.toLocaleString()}, {location}
        </div>
    </>
  )
}

export default Ticker