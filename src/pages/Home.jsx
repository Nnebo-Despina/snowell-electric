import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import '../styles/Home.css'
import ImageOne from "../assets/normal/6W B22 Filament LED A60 Round 2200K Opal Bulb Dimmable.jpeg";
import ImageTwo from "../assets/normal/Intelligence - Mia Cucina.jpeg";
import ImageThree from "../assets/normal/e3bc5e46-9ae8-4206-883a-8a5b6f88aa5b.jpeg";
import ImageFour from "../assets/normal/Grey UK 13A Wall Socket with USB Type-C 18W Fast Charging Universal Dual 3pin Socket,Tempered Glass.jpeg";
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { IoStar } from 'react-icons/io5';
import { RiStarFill } from 'react-icons/ri';
import Footer from '../components/Footer'
import snowell from "/snowell-db/ele-db.json";
import { Link } from 'react-router-dom';


const Home = () => {

  const arrayProductsOne = [
    {
      "category": "Extension",
      "description": "Engineered for safety and strength, Snowell extensions deliver reliable power wherever you need it. With durable materials, secure sockets, and a sleek design, they keep your devices connected with confidence and style.",
      "products": [
        {
          "id": snowell.snowell[11].id,
          "url": snowell.snowell[11].url,
          "price": snowell.snowell[11].price,
          "name": snowell.snowell[11].name
        },
        {
          "id": snowell.snowell[10].id,
          "url": snowell.snowell[10].url,
          "price": snowell.snowell[10].price,
          "name": snowell.snowell[10].name
        },
        {
          "id": snowell.snowell[12].id,
          "url": snowell.snowell[12].url,
          "price": snowell.snowell[12].price,
          "name": snowell.snowell[12].name
        }
      ]
    },
    {
      "category": "Socket",
      "description": "Crafted for durability and precision, Snowell sockets provide safe, reliable power with a modern finish. Designed to perform and built to last — a perfect blend of function and style for any environment.",
      "products": [
        {
          "id": snowell.snowell[27].id,
          "url": snowell.snowell[27].url,
          "price": snowell.snowell[27].price,
          "name": snowell.snowell[27].name
        },
        {
          "id": snowell.snowell[28].id,
          "url": snowell.snowell[28].url,
          "price": snowell.snowell[28].price,
          "name": snowell.snowell[28].name
        },
        {
          "id": snowell.snowell[29].id,
          "url": snowell.snowell[29].url,
          "price": snowell.snowell[29].price,
          "name": snowell.snowell[29].name
        }
      ]
    },
    {
      "category": "Switch",
      "description": "Built for precision and durability, Snowell switches offer smooth control with a sleek, modern design. Reliable, refined, and made to last — the perfect touch for any space.",
      "products": [
        {
          "id": snowell.snowell[34].id,
          "url": snowell.snowell[34].url,
          "price": snowell.snowell[34].price,
          "name": snowell.snowell[34].name
        },
        {
          "id": snowell.snowell[35].id,
          "url": snowell.snowell[35].url,
          "price": snowell.snowell[35].price,
          "name": snowell.snowell[35].name
        },
        {
          "id": snowell.snowell[36].id,
          "url": snowell.snowell[36].url,
          "price": snowell.snowell[36].price,
          "name": snowell.snowell[36].name
        }
      ]
    }
  ]
  const arrayProductsTwo = [
        {
          "id": snowell.snowell[11].id,
          "url": snowell.snowell[11].url,
          "description": snowell.snowell[11].description,
          "name": snowell.snowell[11].name,
          "category": snowell.snowell[11].category
        },
        {
          "id": snowell.snowell[18].id,
          "url": snowell.snowell[18].url,
          "description": snowell.snowell[18].description,
          "name": snowell.snowell[18].name,
          "category": snowell.snowell[18].category
        },
        {
          "id": snowell.snowell[33].id,
          "url": snowell.snowell[33].url,
          "description": snowell.snowell[33].description,
          "name": snowell.snowell[33].name,
          "category": snowell.snowell[33].category
        },
        {
          "id": snowell.snowell[0].id,
          "url": snowell.snowell[0].url,
          "description": snowell.snowell[0].description,
          "name": snowell.snowell[0].name,
          "category": snowell.snowell[0].category
        },
      ]
  
  const [defaultNumber, setDefaultNumber] = useState(0)
  function Forward() {
    setDefaultNumber(prev => (prev + 1) % arrayProductsOne.length)
  }
  function Backward() {
    setDefaultNumber(prev => (prev - 1 + arrayProductsOne.length) % arrayProductsOne.length)
  }

  return (
    <>
      <NavBar />
      <section className='s1-home'>
        <div className='s1-home-hero'>
          <div className='s1-home-hero-text'>
            <h1>Powering Homes and Businesses with  <br /> Quality Electrical Solutions</h1>
            <p>Snowell Electric is your trusted source for durable, affordable and high electrical materials.
            <br />Explore our products built to power your world safely and efficently.</p>

            <div className="search-bar">
              <input 
                type="text" 
                placeholder="What can we get you?" 
                className="search-input"
              />
              <button className="search-btn">Search</button>
            </div>
          </div>
        </div>
      </section>

      <section className='s2-home'>
        <div className='s2-home-cont'>
          <h1>Our Company</h1>
          <p>At Snowell Electric, We are dedicated  <br />to
          providing top-quality electrical <br />materials  
          that meet global <br />standards</p>
          <button className='s2-home-cont-button'>Learn More</button>
        </div>

        <div className='s2-home-cont'>
          <h1>Our Partners</h1>
          <p>We collaborate with reliable brands <br />
          to ensure you get durable, <br />
          certified products. <br />
          Our catelog features trusted names <br />
          in electrical technology and <br />
          power solutions</p>
          <button className='s2-home-cont-button'>Learn more</button>
        </div>
         <div className='s2-home-cont'>
          <h1>Updates</h1>
          <p>Snowell Electric launches its new 
          of smart <br /> home switches and 
          LED fittings<br /> designed to bring 
          modern control <br />and energy efficiency to your space.</p>
          <button className='s2-home-cont-button'>Learn More</button>
        </div>
      </section>

      <section className="s3-home">
        <h1 className='s3-home-header'>Why Our Products Are The Best</h1>
        <div className="s3-home-items-cont">
          <div className="s3-home-item">
            <div className="s3-home-item-overlay"></div>
            <h3 className="s3-home-item-desc">Built to Power, Engineered to Last</h3>
            
            <img src={ImageOne} alt="" />
          </div>
          <div className="s3-home-item">
            <div className="s3-home-item-overlay"></div>
            <h3 className="s3-home-item-desc">Innovation That Lights the Way</h3>
            
            <img src={ImageTwo} alt="" />
          </div>
          <div className="s3-home-item">
            <div className="s3-home-item-overlay"></div>
            <h3 className="s3-home-item-desc">Quality You Can Rely On</h3>
            
            <img src={ImageThree} alt="" />
          </div>
          <div className="s3-home-item">
            <div className="s3-home-item-overlay"></div>
            <h3 className="s3-home-item-desc">Powering Homes, Fueling Progress</h3>
            
            <img src={ImageFour} alt="" />
          </div>
        </div>
      </section>
      <section className="s4-home">
        <h1 className='s4-home-title-one'>Category</h1>
        <h1 className='s4-home-title-two'>{arrayProductsOne[defaultNumber].category}</h1>

        <div className="s4-home-desc-cont">
          <div className="s4-home-desc">
            <h4>Category: <br />{arrayProductsOne[defaultNumber].category}</h4>
            <p>{arrayProductsOne[defaultNumber].description}</p>
          </div>
          <div className="s4-home-arrow">
            <div onClick={Forward}><BsArrowLeft /></div>
            <div onClick={Backward}><BsArrowRight /></div>
          </div>
        </div>
        <div className="s4-home-images">
          {
            arrayProductsOne[defaultNumber].products.map((diffProduct) => (
              <div className='s4-home-products' key={diffProduct.id}>
                  <div className="s4-product-top">
                    <img src={diffProduct.url} alt="" />
                  </div>
                  <div className="s4-product-down">
                    <div className="s4-product-desc">
                        <h4>{diffProduct.name}</h4>
                        <div className="s4-product-price-cont">
                          <p className="s4-product-price">&#8358; <span>{diffProduct.price}</span></p>
                          <p><IoStar color='orange'/>4.5 stars</p>
                        </div>
                        <div className="s4-product-buttons">
                        <button><Link key={diffProduct.id} to={`products/${diffProduct.id}`}>View Details</Link></button>
                        <button>Buy Now</button>
                        </div>
                    </div>
                    </div>
          </div>
            ))
          }
          
          
        </div>
      </section>
      <section className="s6-home">
        <h1 className="s6-home-header">Recommended Products</h1> <br />
        <div className="s6-home-cont">
          <div className="s6-home-one-cont">
            <div className="s6-home-one">
              <img src={arrayProductsTwo[0].url} alt="" />
              <h3>{arrayProductsTwo[0].name}</h3>
              <p className='s6-home-desc'>{arrayProductsTwo[0].description}</p>
              <div className="one-button-div">
                <p><RiStarFill color='orange'/>4.2 stars</p>
                <button><Link key={arrayProductsTwo[0].id} to={`products/${arrayProductsTwo[0].id}`}>View Details</Link></button>
              </div>
            </div>
            <div className="s6-home-one-overlay">
              <h2>{arrayProductsTwo[0].category}</h2>
              <div className="s6-home-overlay-desc">
                <h4>{arrayProductsTwo[0].name}</h4>
                <p>{arrayProductsTwo[0].description}</p><br />
                <button><Link key={arrayProductsTwo[0].id} to={`products/${arrayProductsTwo[0].id}`}>View Details</Link></button>
              </div>
              <div className='s6-overlay-image'></div>
            </div>
          </div>
          <div className="s6-home-two-cont">
            <div className="s6-home-two">
              <img src={arrayProductsTwo[1].url} alt="" />
              <h3>{arrayProductsTwo[1].name}</h3>
              <p className='s6-home-desc'>{arrayProductsTwo[1].description}</p>
              <div className="one-button-div">
                <p><RiStarFill color='orange'/>4.2 stars</p>
                <button><Link key={arrayProductsTwo[1].id} to={`products/${arrayProductsTwo[1].id}`}>View Details</Link></button>
              </div>
            </div>
            <div className="s6-home-two-overlay">
              <h2>{arrayProductsTwo[1].category}</h2>
              <div className="s6-home-overlay-desc">
                <h4>{arrayProductsTwo[1].name}</h4>
                <p>{arrayProductsTwo[1].description}</p><br />
                <button><Link key={arrayProductsTwo[1].id} to={`products/${arrayProductsTwo[1].id}`}>View Details</Link></button>
                
              </div>
              <div className='s6-overlay-image'></div>
            </div>
          </div>
          <div className="s6-home-three-cont">
            <div className="s6-home-three">
              <img src={arrayProductsTwo[2].url} alt="" />
              <h3>{arrayProductsTwo[2].name}</h3>
              <p className='s6-home-desc'>{arrayProductsTwo[2].description}</p>
              <div className="one-button-div">
                <p><RiStarFill color='orange'/>4.2 stars</p>
                <button><Link key={arrayProductsTwo[2].id} to={`products/${arrayProductsTwo[2].id}`}>View Details</Link></button>
              </div>
            </div>
            <div className="s6-home-three-overlay">
              <h2>{arrayProductsTwo[2].category}</h2>
              <div className="s6-home-overlay-desc">
                <h4>{arrayProductsTwo[2].name}</h4>
                <p>{arrayProductsTwo[2].description}</p><br />
                <button><Link key={arrayProductsTwo[2].id} to={`products/${arrayProductsTwo[2].id}`}>View Details</Link></button>
                
              </div>
              <div className='s6-overlay-image'></div>
            </div>
          </div>
          <div className="s6-home-four-cont">
            <div className="s6-home-four">
              <img src={arrayProductsTwo[3].url} alt="" />
              <h3>{arrayProductsTwo[3].name}</h3>
              <p className='s6-home-desc'>{arrayProductsTwo[3].description}</p>
              <div className="one-button-div">
                <p><RiStarFill color='orange'/>4.2 stars</p>
                <button><Link key={arrayProductsTwo[3].id} to={`products/${arrayProductsTwo[3].id}`}>View Details</Link></button>
              </div>
            </div>
            <div className="s6-home-four-overlay">
              <h2>{arrayProductsTwo[3].category}</h2>
              <div className="s6-home-overlay-desc">
                <h4>{arrayProductsTwo[3].name}</h4>
                <p>{arrayProductsTwo[3].description}</p><br />
                <button><Link key={arrayProductsTwo[3].id} to={`products/${arrayProductsTwo[3].id}`}>View Details</Link></button>
                
              </div>
              <div className='s6-overlay-image'></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Home