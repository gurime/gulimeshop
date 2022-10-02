import React from 'react'
import  '../css/ProductDetails.css'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { FaFacebook, FaTwitter } from 'react-icons/fa'
import {RiStarSFill} from 'react-icons/ri'
import { useParams } from 'react-router-dom';
import { HouseProd } from '../db';

const HouseHoldProductDetails = () => {
    const  {slug}  = useParams();
    const product = HouseProd[slug];
    const { Price, Title, Desc, Brand,imgUrl } = product;
return (
<>
<Navbar/>
<div className="details-container">



<div className="flex-wrap-box">

<img alt="..." className="Product-img"  src={imgUrl}/>
<div className="deatils-desc-box">
<h2 className="deatils-brand-name"> {Brand}</h2>
<h1 className="Product-Title">{Title}</h1>
<div className="reviews-number-box">
<span className="flex-reviews">
<RiStarSFill/>
<RiStarSFill/>
<RiStarSFill/>
<RiStarSFill/>
<RiStarSFill/>
<span >5 Reviews</span>
</span>

<span className="flex-social-img">
<a href='#!'>
<FaFacebook/>
</a>

<a href='#!'>
<FaTwitter/>
</a>
</span>
</div>

<p className="deatils-desc">{Desc}</p>

<div className="price-layout">
<span className="price-title">{Price}</span>
<button type='button' className="price-details-btn">Add to Cart</button>
</div>
</div>
</div>
</div>
     <Footer/> 
</>
)
}

export default HouseHoldProductDetails