import React, { useEffect, useState } from 'react'
import '../styles/Products.css'
import NavBar from '../components/NavBar'
import { BiBulb, BiExtension, BiHeart, BiSearch } from 'react-icons/bi'
import { IoCartOutline } from 'react-icons/io5'
import { FaHeart } from 'react-icons/fa'
import snowell from "/snowell-db/ele-db.json";
import { BsBoxes, BsCurrencyExchange } from 'react-icons/bs'
import { GrFan } from 'react-icons/gr'
import { TbCircuitResistor } from 'react-icons/tb'
import { SiSocketdotio } from 'react-icons/si'
import { RxSwitch } from 'react-icons/rx'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import PriceList from '../components/PriceList'

const Products = () => {
    const [heart, setHeart] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [selectedCategory, setSelectedCategory] = useState('All')

    const itemsPerPage = 9
    const filteredSearch = snowell.snowell.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory =
            selectedCategory === 'All' || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = filteredSearch.slice(indexOfFirstItem, indexOfLastItem)

    const totalPages = Math.ceil(filteredSearch.length / itemsPerPage)

    const nextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1)
    }

    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1)
    }
    
    const categoryCounts = snowell.snowell.reduce((acc, product) => {
        const cat = product.category;
        acc[cat] = (acc[cat] || 0) + 1;
        return acc;
    }, {});


  return (
    <>
      <NavBar />
      <section className="s1-products">
        <div className="s1-products-intro">
            <div className="s1-products-overlay">
                <h1>Products</h1>
                <div className="s1-products-search">
                <p>What do you need?</p>
                <div className="s1-products-search-input">
                    <div>
                        <BiSearch color='black' size='22'/>
                        <input type="text" size="30" placeholder="Search..." value={searchTerm} onChange={(e) => {setSearchTerm(e.target.value);
                        setCurrentPage(1);}
                        }/>
                    </div>
                    {/* <button onClick={}>Search</button> */}
                </div>
            </div>
            </div> 
        </div>
    </section>
    <section className="s2-products">
        <div className="s2-nav-menu">
            <h2>Categories</h2>
            <div className={`all-products ${selectedCategory === 'All' ? 'active' : ''}`}
                onClick={() => { setSelectedCategory('All'); setCurrentPage(1); }}>
                <div>
                   <BsBoxes size='20'/>
                   <p>All Products</p>
                </div>
                <div className="number-display">{snowell.snowell.length}</div>
            </div>
            <div className={`all-bulb ${selectedCategory === 'bulb' ? 'active' : ''}`}
                onClick={() => { setSelectedCategory('bulb'); setCurrentPage(1); }}>
                <div>
                   <BiBulb size='20'/>
                   <p>Bulbs</p>
                </div>
                <div className="number-display">{categoryCounts['bulb'] || 0}</div>
            </div>
            <div className={`all-extension ${selectedCategory === 'extension' ? 'active' : ''}`}
                onClick={() => { setSelectedCategory('extension'); setCurrentPage(1); }}>
                <div>
                   <BiExtension size='20'/>
                   <p>Extensions</p>
                </div>
                <div className="number-display">{categoryCounts['extension'] || 0}</div>
            </div>
            <div className={`all-fan ${selectedCategory === 'fan' ? 'active' : ''}`}
                onClick={() => { setSelectedCategory('fan'); setCurrentPage(1); }}>
                <div>
                   <GrFan size='20'/>
                   <p>Fans</p>
                </div>
                <div className="number-display">{categoryCounts['fan'] || 0}</div>
            </div>
            <div className={`all-fuse ${selectedCategory === 'fuse' ? 'active' : ''}`}
                onClick={() => { setSelectedCategory('fuse'); setCurrentPage(1); }}>
                <div>
                   <TbCircuitResistor size='20'/>
                   <p>Fuse</p>
                </div>
                <div className="number-display">{categoryCounts['fuse'] || 0}</div>
            </div>
            <div className={`all-socket ${selectedCategory === 'socket' ? 'active' : ''}`}
                onClick={() => { setSelectedCategory('socket'); setCurrentPage(1); }}>
                <div>
                   <SiSocketdotio size='20'/>
                   <p>Socket</p>
                </div>
                <div className="number-display">{categoryCounts['socket'] || 0}</div>
            </div>
            <div className={`all-switch ${selectedCategory === 'switch' ? 'active' : ''}`}
                onClick={() => { setSelectedCategory('switch'); setCurrentPage(1); }}>
                <div>
                   <RxSwitch />
                   <p>Switch</p>
                </div>
                <div className="number-display">{categoryCounts['switch'] || 0}</div>
            </div>
        </div>
        <div className="s2-products-item">
            {filteredSearch.length === 0 ? 
            (<p className='none-matching'>No matching products</p>) 
                : 
            currentItems.map((product) => (
                <div key={product.id} className="s2-product-card">
                    <div className="s2-product-top">
                        <div className="s2-product-top-overlay">
                            <div className='s2-menu-card-class'>{product.category}</div>
                            
                            <div className="s2-menu-card-cont" onClick={() => setHeart(!heart)}>
                            {heart ? 
                                <div><FaHeart size='25' color='rgba(175, 0, 0, 1)'/></div> 
                            : 
                                <div><BiHeart size='25' /></div>}
                            <div><IoCartOutline size='25' /></div>
                            </div>
                        </div>
                    <img src={product.url} alt="" />
                    </div>
                    <div className="s2-product-down">
                    <div className="s2-product-desc">
                        <h4>{product.name}</h4>
                        <div className="s2-product-price-cont">
                        <p className="s2-product-price">
                            &#8358; <span>{product.price}</span>
                        </p>
                        <div>
                            <img src="../img/svg/star-solid.svg" alt="" />
                            {product.reviews && product.reviews.length > 0 ? (
                                (() => {
                                const avg =
                                    product.reviews.reduce((total, review) => total + review.rating, 0) /
                                    product.reviews.length;
                                return (
                                    <p>
                                    {avg.toFixed(1)} ({product.reviews.length} reviews)
                                    </p>
                                );
                                })()
                            ) : (
                                <p>No reviews</p>
                            )}
                        </div>
                        </div>
                        <div className="s2-product-buttons">
                        <button><Link key={product.id} to={`${product.id}`}>View Details</Link></button>
                        <button>Buy Now</button>
                        </div>
                    </div>
                    </div>
                </div>)
                )}

        
        </div>
    </section>
    <div className="pagination-section">
        <PriceList cat={selectedCategory} product={snowell.snowell} autoDownload={false}/>
        <div className="pagination-button">
        <button onClick={prevPage} disabled={currentPage == 1}>Previous</button>
        <p>Page {currentPage} of {totalPages}</p>
        <button onClick={nextPage} disabled={currentPage == totalPages}>Next</button>
        </div>
    </div>
    <section className="s3-products">
        <div className="s3-products-cont">
            <div className="s3-products-heading">
                <h1>Want To Know When We Get New Stuff?</h1>
                <br/><br/>
                <div>
                    <input type="text" placeholder="Your email" size='35'/>
                    <button>Send</button>
                </div>
            </div>
            
            <div className="s3-products-desc">
                <h2>Stay Connected with Snowell</h2>
                <br />
                <p>Be the first to know about our latest innovations, product launches, and exclusive offers. Subscribe to our newsletter and keep your world powered with updates that matter.</p>
            </div>
        </div>
    </section>
    <Footer />
    </>
  )
}

export default Products