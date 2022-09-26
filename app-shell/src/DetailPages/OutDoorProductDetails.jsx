import React from 'react'
import { FaFacebook, FaTwitter } from 'react-icons/fa'
import {RiStarSFill} from 'react-icons/ri'
import { useParams } from 'react-router-dom';
import {  OutDoorProd } from '../db'
import  '../css/ProductDetails.css'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const OutDoorProductDetails = () => {
    const  {slug}  = useParams();
    const product = OutDoorProd[slug];
    const { Price, Title, Desc, Brand,imgUrl } = product;
return (
<>
<Navbar/>
<div className="details-container">



<div className="flex-wrap-box">

<img className="Product-img"  src={imgUrl} alt="..."/>
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
<a>
<FaFacebook/>
</a>

<a>
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

export default OutDoorProductDetails