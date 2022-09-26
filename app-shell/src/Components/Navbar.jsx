import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Gulime-logo1.jpg'
import '../css/Navbar.css'
export const Navbar = () => {



return (
<>
<header>
<div className="navbar">
        
<div className="logo">
<Link to='/'>
<img src={Logo}  alt="LOGO"/>
</Link>
</div>
                

</div>
<ul className="navlinks">


<li><Link  to="/movies">Movies & TV</Link></li>

<li><Link  to='/technology'>Technology</Link></li>
<li><Link  to='/gaming'>Gaming</Link></li>

<li><Link  to='/music'>Music</Link></li>

<li><Link  to="/household">Household</Link></li>

<li><Link  to="/outdoors">Outdoors & Sports</Link></li>
<li><Link  to="/toyskids&baby">Toy, Kids, & Baby </Link></li>
<li><Link  to="/books">Books</Link></li>
<li><Link  to="/beauty">Beauty & Health</Link></li>

</ul>
</header> 
    
</>
)
}

export default Navbar