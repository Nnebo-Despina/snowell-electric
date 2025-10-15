import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import '../styles/ProductDetails.css'
import ImagePro from "../assets/normal/bulb/4W B22 Laser-cut Filament LED G95 Round Amber 1800K Bulb.jpeg";
import { BiHeart, BiMinus, BiPlus } from 'react-icons/bi';
import { PiMicrosoftWordLogo } from 'react-icons/pi';
import { RiStarFill } from 'react-icons/ri';
import Pfp from "../assets/normal/Deafult PFP _ @davy3k.jpeg";
import { useNavigate, useParams } from 'react-router-dom';
import snowell from "/snowell-db/ele-db.json";
import { BsArrowLeft, BsCurrencyExchange } from 'react-icons/bs';

const ProductDetails = () => {
  const { id } = useParams()
  const [count, setCount] = useState(1)
  const product = snowell.snowell.find(item => item.id === parseInt(id));
  const price = product.price
  const [productPrice, setproductPrice] = useState(price)

  

  function functionOne() {
    setCount(count + 1)
  }
  function functionTwo() {
    setproductPrice(productPrice + price)
  }
  function functionThree() {
    setproductPrice(productPrice - price)
  }
  function functionFour() {
    setCount(count - 1)
  }
  function handleIncrement() {
    functionOne()
    functionTwo()
  }
  function handleDecrement() {
    functionFour()
    functionThree()
  }

  function starReview(starNo) {
         return (
            <div className="rating-review">
            {Array.from({ length: starNo }, (_, i) => (
                <RiStarFill key={i} color='orange'/>
            ))}
            </div>
        );
  }
  const getRatingData = (reviews) => {
    const totalReviews = reviews.length;
    const totalRating = reviews.reduce((sum, r) => sum + r.rating, 0);
    const averageRating = totalReviews ? (totalRating / totalReviews).toFixed(1) : 0;

    // Count how many reviews for each star
    const ratingCounts = [1, 2, 3, 4, 5].reduce((acc, star) => {
      acc[star] = reviews.filter(r => r.rating === star).length;
      return acc;
    }, {});

    // Convert counts to percentages
    const ratingPercentages = [1, 2, 3, 4, 5].reduce((acc, star) => {
      acc[star] = totalReviews ? (ratingCounts[star] / totalReviews) * 100 : 0;
      return acc;
    }, {});

    return { totalReviews, averageRating, ratingPercentages };
  };

  const { totalReviews, averageRating, ratingPercentages } = getRatingData(product.reviews);
  const navigate = useNavigate()

  const handleBackClick = () => {
      navigate(-1)
  }

  function downloadWordDoc() {
    const content = `
      <html>
        <body>
          <h2>${product.name}</h2>
          <p>Category: ${product.category}</p>
          <p>Price: &#8358; ${product.price}</p>
          <p>Description: ${product.description}</p>
        </body>
      </html>
    `;
    const blob = new Blob(["\ufeff",content], { type: "application/msword"});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${product.name}.doc`;
    link.click()
  }
    

  return (
    <>
      <NavBar />
      <section className="s1-details">
        <div className='s1-details-back' onClick={handleBackClick}>
          <BsArrowLeft />
          <p>Back</p>
        </div>
        <div className='s1-details-cont'>
        <div className="s1-details-img">
          <img src={product.url} alt="" />
        </div>
        <div className="s1-details-desc">
          <div>
          <div className="desc-heart-cont">
            <div>
              <p>{product.category}</p>
              <h2>{product.name}</h2>
            </div>
            <div className="heart-div-cont">
              <BiHeart  size={25}/>
            </div>
          </div>
          
          <h4 className="desc-price">&#8358; {productPrice}</h4><br />
          <p className="description-full">
            {product.description}
          </p><br />
          </div>
          <div>
            <div className="button-section">
              <div className="increment-div">
                <button onClick={handleIncrement}><BiPlus size='17'/></button>
                <p>{count}</p>
                <button onClick={handleDecrement} disabled={count == 1}><BiMinus size='17'/></button>
              </div>
              <button className="add-to-cart">Add To Cart</button>
            </div>
              <div className="word-doc-download" onClick={downloadWordDoc}>
                <PiMicrosoftWordLogo size='20'/>
                <p>Download Word Document</p> 
              </div>
            
          </div>
        </div>
        </div>
      </section>
      <section className="s2-details">
        <div className="s2-details-header">
          <h2>Reviews</h2>
        </div>
        <div className="s2-details-review-brief">
          <div className="details-review-desc">
            <p className="details-review-desc-rate"><span>{averageRating}</span> out of 5</p>
            {starReview(Math.round(averageRating))}
            <p>({totalReviews} reviews)</p>
            
          </div>
          <div className="line-details-s2"></div>
          <div className="details-review-diagram">
            {[5, 4, 3, 2, 1].map(star => (
              <div key={star} className="review-diagram-cont">
                <p>{star} Star{star > 1 ? 's' : ''}</p>
                <div className="line-cont">
                  <div
                    className="line-main-div"
                    style={{ width: `${ratingPercentages[star]}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="s2-details-list">
          <h2>Review List</h2>
          <br />
          {
            product.reviews.map((review) => 
              <div className="s2-details-review-cont">
              <div className="review-top-side">
                <div className="s2-details-reviewer-info">
                  <img src={Pfp} alt="" className="review-img" />
                  <p className="review-name">{review.name}</p>
                </div>
                <p className="date-review">{review.date}</p>
              </div> 
              <p>{review.comment}</p>
              <br />
              {starReview(review.rating)}
              
            </div>
            )
          }
          
          
        </div>
      </section>
    </>
  )
}

export default ProductDetails