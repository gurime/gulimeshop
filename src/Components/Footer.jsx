import React from 'react'
import { Link } from 'react-router-dom'
import footerlogo from '../assets/Gulime-logo1.jpg'
import '../css/Footer.css'

const scrollTo = () =>{
  window.scroll({
    top: 0,
    behavior: "smooth"
  })
}



function Footer() {
  return (

<footer id="footer">


<div className="flex-footer">
<div className="footer-tablebox"> 
<div className="footer-headline">Make Money With US</div>
<div className="footer-seperator"></div>
<ul className="footer-navlink">
<li><a href="#!">Sell products on Gulime</a></li>
<div className="footer-seperator"></div>
<li><a className="#!">Invest in Gulime</a></li>
<div className="footer-seperator"></div>
<li><a href="#!">Advertise your products </a></li>
<div className="footer-seperator"></div>
<li><a href="#!">Become a delivery driver</a></li>
<div className="footer-seperator"></div>
<li><a href="#!">Affiliate</a></li>
<div className="footer-seperator"></div>
</ul>
</div>
{/*first tablebox stops here*/}
<div className="footer-tablebox"> 
<div className="footer-headline">Shop By Department</div>
<div className="footer-seperator"></div>
<ul className="footer-navlink">
<li><Link  to="/household">Household</Link></li>
<div className="footer-seperator"></div>
<li><Link   to="/outdoors">Outdoors & Sports</Link></li>
<div className="footer-seperator"></div>
<li><Link  to="/toyskids&baby">Toy, Kids, & Baby </Link></li>
<div className="footer-seperator"></div>
<li><Link  to="/books">Books</Link></li>
<div className="footer-seperator"></div>
<li><Link  to="/beauty">Beauty & Health</Link></li>
<div className="footer-seperator"></div>
</ul>
</div>
{/*seconds tablebox stops here*/}
<div className="footer-tablebox"> 
<div className="footer-headline">Gaming</div>
<div className="footer-seperator"></div>
<ul className="footer-navlink">
<li><Link  to="/playstation">Playstation</Link></li>
<div className="footer-seperator"></div>
<li><Link  to="/xbox">Xbox</Link></li>
<div className="footer-seperator"></div>
<li><Link  to="/nintendo">Nintendo </Link></li>
<div className="footer-seperator"></div>
<li><Link  to="/pcgaming">PC</Link></li>
<div className="footer-seperator"></div>
<li><Link  to="/mobilegaming">Mobile Gaming</Link></li>
<div className="footer-seperator"></div>
</ul>
</div>
{/*third tablebox stops here*/}
<div className="footer-tablebox" style={{borderRight:'none' ,borderBottom:'none'}}> 
<div className="footer-headline">Let Us Help You</div>
<div className="footer-seperator"></div>
<ul className="footer-navlink">
<li><Link  to="/contact">Contact Us</Link></li>
<div className="footer-seperator"></div>
<li><Link  to="/about">About</Link></li>
<div className="footer-seperator"></div>
<li><a href="#!">Check you order </a></li>
<div className="footer-seperator"></div>
<li><a href="#!">Your Account</a></li>
<div className="footer-seperator"></div>
<li><a href="#!">Shipping and Delivery</a></li>
<div className="footer-seperator"></div>
</ul>
</div>
{/*fourth tablebox stops here*/}


</div>
<hr style={{color:'#fff',border:'solid 1px'}}/>


<p style={{color: '#fff', textAlign: 'center'}}>
&#169; Text or its affiliated companies. All rights reserved. 
</p>

<div  className="footer-logo-box">
<a className="logo-footer" style={{color: '#fff'}}>
<img onClick= {scrollTo}   src={footerlogo}/>
</a>
</div>
</footer>



  );
}

export default Footer;
