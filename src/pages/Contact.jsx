import React, { useEffect, useState } from "react";
import "../styles/Contact.css";
import NavBar from "../components/NavBar.jsx"
import { FaHouse } from "react-icons/fa6";
import { BsArrowRight } from "react-icons/bs";
import Footer from "../components/Footer.jsx";

const Contact = () => {
 const [location, setLocation] = useState(null);
  const [place, setPlace] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const { latitude, longitude } = pos.coords;
          setLocation({ latitude, longitude });

          try {
            const response = await fetch(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
            );
            const data = await response.json();

            setPlace({
              locality: data.locality || data.city || "Unknown area",
              principalSubdivision: data.principalSubdivision || "", // region/state
              country: data.countryName || "",
              street: data.localityInfo?.administrative?.[0]?.name || "", // sometimes returns a nearby neighborhood
            });
          } catch (err) {
            setError("Unable to retrieve location details.");
          }
        },
        (err) => {
          setError(err.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
      <>
      <NavBar />
    <section className="contact-wrapper">
      <h2 className="contact-title">Contact Us</h2>
      <div className="contact-container">
        <div className="contact-left">
            {/* <h3>Call Us</h3>
            <p>Got questions for us? We'd love to hear from you! Give us a call, we're always here to serve your tastebuds with a smile.</p>
            <div className='icon-div-contact'>
                <MdCall color="var(--primaryColor)" size='20'/>
                <p>+234 813 4567 043</p>
            </div> */}
            <h3>Visit Us</h3>
            <p>Stop by our office to explore Snowell Electric's products and innovations. (This is actually where the geolocation happens!)</p>
            <div className='icon-div-contact'>
                <FaHouse color="var(--primaryColor)" size='18'/>
                {place ? (
                    <p>
                      {place.locality && `${place.locality}, `}
                      {place.principalSubdivision && `${place.principalSubdivision}, `}
                      {place.country}
                    </p>
                ) : (
                  <p>Fetching address details...</p>
                )}
            </div>
            <br />
            <br />
            <h3>Email Us</h3>
            <p>Have a question about our products or need technical assistance? Send us a message!</p>
            <a href="mailto:support@snowellelectric.com?subject=Product Inquiry" className='icon-div-contact'>
                <button className='icon-div-mail'>Send An Email</button>
            </a>
            
        </div>
        <div className="line-contact-s1"></div>
        <div className="contact-right">
          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Name" required />
              <input type="text" placeholder="Company" />
            </div>
            <div className="form-row">
              <input type="email" placeholder="Email" required />
              <input type="tel" placeholder="Phone" />
            </div>
            <textarea
              placeholder="Want to know more? Drop us a line!"
              rows="4"
            ></textarea>

            <div className="form-footer">
              <button type="submit" className="send-btn">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    <section className="faq-contact-us">
            <div className='faq-name-contact'>
                <h4>FAQ</h4>
                <h1>Frequently Asked Questions</h1>
            </div>
            <div className='faq-questions'>
                <h3>Got questions? We’ve got answers!</h3>
                <br />
                <p>Our FAQ section has the answers you need. 
                  Learn more about our products, shipping, and support to keep your power running smoothly with Snowell Electric.
                </p>
                <br /><br /><br />
                <div className="questions-contact">
                    <div>
                    <p>What makes Snowell Electric products stand out?</p>
                    <BsArrowRight />
                    </div>
                    <br />
                    <div>
                    <p>Do you offer energy-efficient lighting solutions?</p>
                    <BsArrowRight />
                    </div>
                    <br />
                    <div>
                    <p>How can I place an order?</p>
                    <BsArrowRight />
                    </div>
                    <br />
                    <div>
                    <p>Do you provide nationwide delivery and installation support?</p>
                    <BsArrowRight />
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </>
  );
};

export default Contact;
