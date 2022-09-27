import React from 'react'
import { Link } from 'react-router-dom'
import {Navbar } from './Navbar'
import { 
FeatHomeProd, 
FeatHomeMovieProd,
FeatHomeTechProd,
HomeProd,
MovieProd, 
TechProd,
GamingProd,
FeatHomeGamingProd,
FeatHomeMusicProd,
MusicProd,
FeatHomeHouseHoldProd,
HouseProd,
FeatOutDoorProd,
OutDoorProd,
FeatToysProd,
ToysProd,
FeatBooksProd,
BooksProd,
FeatBeautyProd,
BeautyProd} from '../db'
import '../css/Home.css'
import Footer from './Footer'
const Home = () => {
document.title = 'Gulime | Best place to shop'
   
return (
<>
<Navbar/>
{Object.entries(FeatHomeProd).map(([slug, { Desc,Price, imgUrl,Title }]) => (
<div style={{backgroundColor:'#e4ebf1'}} key={FeatHomeProd} className='hero'>
<div className='hero-details'>
<h1 className='hero-text'>{Title}
<br className='hero-text-br'/>
Play Has No Limits
</h1>
<p className='hero-subtext'>{Desc}</p>
<div className="hero-price">{Price}</div>
</div>
    
<div className='product-img'>
<Link to={`/featuredproducts/${slug}`}>
<img   src={imgUrl} alt='...'/>
</Link>
</div>
</div>
))}

<div className='grid-container'>

{Object.entries(HomeProd).map(([slug, { Price, imgUrl,Title,category }]) => (
<div key={slug} className="card">
<Link to={`${slug}`}>
<img   src={imgUrl} alt='...'/>
</Link>
<div className='card-content'>
<h3 className="card-catogory">{category}</h3>
<div className="card-title">{Title}</div>
<div className="card-price">{Price}</div>
</div>
</div>
))}
</div>




{/**Movie section products starts here */}

<h1 style={{
fontSize:'60px',
textAlign:'center'

}}>Movies & TV</h1>
{Object.entries(FeatHomeMovieProd).map(([slug, { Price,Desc, imgUrl,Title }]) => (
<div style={{backgroundColor:'#e4ebf1'}} 
key={FeatHomeMovieProd} className='hero'>

    
<div className='product-img'>
<Link to={`/featuredmovieproducts/${slug}`}>
<img   src={imgUrl} alt='...'/>
</Link>
</div>

<div className='hero-details'>
<h1 className='hero-text'>{Title}
<br className='hero-text-br'/>
</h1>
<p className='hero-subtext'>{Desc}</p>
<div className="hero-price">{Price}</div>
</div>
</div>
))}

<div className='grid-container'>
{Object.entries(MovieProd).map(([slug, { Price, imgUrl,Title,category }]) => (
<div key={MovieProd} className='card'>
<div className='product-img'>
<Link to={`/movieproductdetails/${slug}`}>
<img   src={imgUrl} alt='...'/>
</Link>
</div>

<div className='card-content'>
<h3 className="card-catogory">{category}</h3>
<div className="card-title">{Title}</div>
<div className="card-price">{Price} </div>
</div>
</div>
))}
</div>
{/**Movie section products stops here */}






{/**Tech section products starts here */}
<h1 style={{
fontSize:'60px',
textAlign:'center'

}}>Technology</h1>
{Object.entries(FeatHomeTechProd).map(([slug, { Price,Desc, imgUrl,Title }]) => (
<div style={{backgroundColor:'#e4ebf1'}} key={FeatHomeTechProd} className='hero'>
<div className='hero-details'>
<h1 className='hero-text'>{Title}
<br className='hero-text-br'/>
</h1>
<p className='hero-subtext'>{Desc}</p>
<div className="hero-price">{Price}</div>
</div>
    
<div className='product-img'>
<Link to={`/featuredtechproducts/${slug}`}>
<img   src={imgUrl} alt='...'/>
</Link>
</div>
</div>
))}

<div className="grid-container">
{Object.entries(TechProd).map(([slug, { Price, imgUrl,Title,category }]) => (
<div key={TechProd} className='card'>
<div style={{width:'100%'}} className='product-img'>
<Link to={`/hometechproductdetails/${slug}`}>
<img   src={imgUrl} alt='...'/>
</Link>
</div>

<div className='card-content'>
<h3 className="card-catogory">{category}</h3>
<div className="card-title">{Title}</div>
<div className="card-price">{Price} </div>
</div>
</div>
))}
</div>

{/**Tech section products stops here */}



{/**gaming section products stops here */}

<h1 style={{
fontSize:'60px',
textAlign:'center'

}}>Gaming</h1>
{Object.entries(FeatHomeGamingProd).map(([slug, { Price,Desc, imgUrl,Title }]) => (
<div style={{backgroundColor:'#e4ebf1'}} 
key={FeatHomeGamingProd} className='hero'>

    
<div className='product-img'>
<Link to={`/featuredgamingproducts/${slug}`}>
<img   src={imgUrl} alt='...'/>
</Link>
</div>

<div className='hero-details'>
<h1 className='hero-text'>{Title}
<br className='hero-text-br'/>
</h1>
<p className='hero-subtext'>{Desc}</p>
<div className="hero-price">{Price}</div>
</div>
</div>
))}



<div className='grid-container'>
{Object.entries(GamingProd).map(([slug, { Price, imgUrl,Title,category }]) => (
<div key={GamingProd} className='card'>
<div className='product-img'>
<Link to={`/homegamingproductdetails/${slug}`}>
<img   src={imgUrl} alt='...'/>
</Link>
</div>

<div className='card-content'>
<h3 className="card-catogory">{category}</h3>
<div className="card-title">{Title}</div>
<div className="card-price">{Price} </div>
</div>
</div>
))}
</div>
{/**gaming section products stops here */}

{/**music section products starts here */}
<h1 style={{
fontSize:'60px',
textAlign:'center'

}}>Music</h1>
{Object.entries(FeatHomeMusicProd).map(([slug, { Price,Desc, imgUrl,Title }]) => (
<div style={{backgroundColor:'#e4ebf1'}} key={FeatHomeMusicProd} className='hero'>
<div className='hero-details'>
<h1 className='hero-text'>{Title}
<br className='hero-text-br'/>
</h1>
<p className='hero-subtext'>{Desc}</p>
<div className="hero-price">{Price}</div>
</div>
    
<div className='product-img'>
<Link to={`/featuredmusicproducts/${slug}`}>
<img   src={imgUrl} alt='...'/>
</Link>
</div>
</div>
))}



<div className='grid-container'>
{Object.entries(MusicProd).map(([slug, { Price, imgUrl,Title,category }]) => (
<div key={MusicProd} className='card'>
<div className='product-img'>
<Link to={`/homemusicproductdetails/${slug}`}>
<img   src={imgUrl} alt='...'/>
</Link>
</div>

<div className='card-content'>
<h3 className="card-catogory">{category}</h3>
<div className="card-title">{Title}</div>
<div className="card-price">{Price} </div>
</div>
</div>
))}
</div>
{/**music section products stops here */}




{/**household section products starts here */}
<h1 style={{
fontSize:'60px',
textAlign:'center'

}}>HouseHold</h1>
{Object.entries(FeatHomeHouseHoldProd).map(([slug, { Price,Desc, imgUrl,Title }]) => (
<div style={{backgroundColor:'#e4ebf1'}} key={FeatHomeHouseHoldProd} className='hero'>

<div className='product-img'>
<Link to={`/featuredhouseproducts/${slug}`}>
<img   src={imgUrl} alt='...'/>
</Link>
</div>

<div className='hero-details'>
<h1 className='hero-text'>{Title}
<br className='hero-text-br'/>
</h1>
<p className='hero-subtext'>{Desc}</p>
<div className="hero-price">{Price}</div>
</div>
    

</div>
))}

<div className='grid-container'>
{Object.entries(HouseProd).map(([slug, { Price, imgUrl,Title,category }]) => (
<div key={HouseProd} className='card'>
<div className='product-img'>
<Link to={`/homehouseproductdetails/${slug}`}>
<img   src={imgUrl} alt='...'/>
</Link>
</div>

<div className='card-content'>
<h3 className="card-catogory">{category}</h3>
<div className="card-title">{Title}</div>
<div className="card-price">{Price} </div>
</div>
</div>
))}
</div>
{/**household section products stops here */}

{/**household section products starts here */}
<h1 style={{
fontSize:'60px',
textAlign:'center'

}}>OutDoors & Sports</h1>
{Object.entries(FeatOutDoorProd).map(([slug, { Price,Desc, imgUrl,Title }]) => (
<div style={{backgroundColor:'#e4ebf1'}} key={FeatOutDoorProd} className='hero'>



<div className='hero-details'>
<h1 className='hero-text'>{Title}
<br className='hero-text-br'/>
</h1>
<p className='hero-subtext'>{Desc}</p>
<div className="hero-price">{Price}</div>
</div>
<div className='product-img'>
<Link to={`/featuredoutdoorproducts/${slug}`}>
<img   src={imgUrl} alt='...'/>
</Link>
</div> 

</div>
))}

<div className='grid-container'>
{Object.entries(OutDoorProd).map(([slug, { Price, imgUrl,Title,category }]) => (
<div key={OutDoorProd} className='card'>
<div className='product-img'>
<Link to={`/homeoutdoorproductdetails/${slug}`}>
<img   src={imgUrl} alt='...'/>
</Link>
</div>

<div className='card-content'>
<h3 className="card-catogory">{category}</h3>
<div className="card-title">{Title}</div>
<div className="card-price">{Price} </div>
</div>
</div>
))}
</div>
{/**household section products stops here */}

{/**toys section products starts here */}
<h1 style={{
fontSize:'60px',
textAlign:'center'

}}>Toys, Kids, and Baby</h1>
{Object.entries(FeatToysProd).map(([slug, { Price,Desc, imgUrl,Title }]) => (
<div style={{backgroundColor:'#e4ebf1'}} key={FeatToysProd} className='hero'>
<div className='product-img'>
<Link to={`/featuredtoysproducts/${slug}`}>
<img   src={imgUrl} alt='...'/>
</Link>
</div> 


<div className='hero-details'>
<h1 className='hero-text'>{Title}
<br className='hero-text-br'/>
</h1>
<p className='hero-subtext'>{Desc}</p>
<div className="hero-price">{Price}</div>
</div>


</div>
))}

<div className='grid-container'>
{Object.entries(ToysProd).map(([slug, { Price, imgUrl,Title,category }]) => (
<div key={ToysProd} className='card'>
<div className='product-img'>
<Link to={`/hometoysproductdetails/${slug}`}>
<img   src={imgUrl} alt='...'/>
</Link>
</div>

<div className='card-content'>
<h3 className="card-catogory">{category}</h3>
<div className="card-title">{Title}</div>
<div className="card-price">{Price} </div>
</div>
</div>
))}
</div>
{/**toys section products stops here */}

{/**books section products starts here */}
<h1 style={{
fontSize:'60px',
textAlign:'center'

}}>Books</h1>
{Object.entries(FeatBooksProd).map(([slug, { Price,Desc, imgUrl,Title }]) => (
<div style={{backgroundColor:'#e4ebf1'}} key={FeatBooksProd} className='hero'>



<div className='hero-details'>
<h1 className='hero-text'>{Title}
<br className='hero-text-br'/>
</h1>
<p className='hero-subtext'>{Desc}</p>
<div className="hero-price">{Price}</div>
</div>

<div className='product-img'>
<Link to={`/featuredbookproducts/${slug}`}>
<img   src={imgUrl} alt='...'/>
</Link>
</div> 
</div>
))}

<div className='grid-container'>
{Object.entries(BooksProd).map(([slug, { Price, imgUrl,Title,category }]) => (
<div key={BooksProd} className='card'>
<div className='product-img'>
<Link to={`/homebooksproductdetails/${slug}`}>
<img   src={imgUrl} alt='...'/>
</Link>
</div>

<div className='card-content'>
<h3 className="card-catogory">{category}</h3>
<div className="card-title">{Title}</div>
<div className="card-price">{Price} </div>
</div>
</div>
))}
</div>
{/**books section products stops here */}

{/**books section products starts here */}
<h1 style={{
fontSize:'60px',
textAlign:'center'

}}>Beauty & Health</h1>
{Object.entries(FeatBeautyProd).map(([slug, { Price,Desc, imgUrl,Title }]) => (
<div style={{backgroundColor:'#e4ebf1'}} key={FeatBeautyProd} className='hero'>

<div className='product-img'>
<Link to={`/featuredbeautyproducts/${slug}`}>
<img   src={imgUrl} alt='...'/>
</Link>
</div> 

<div className='hero-details'>
<h1 className='hero-text'>{Title}
<br className='hero-text-br'/>
</h1>
<p className='hero-subtext'>{Desc}</p>
<div className="hero-price">{Price}</div>
</div>


</div>
))}

<div className='grid-container'>
{Object.entries(BeautyProd).map(([slug, { Price, imgUrl,Title,category }]) => (
<div key={BeautyProd} className='card'>
<div className='product-img'>
<Link to={`/homebeautyproductdetails/${slug}`}>
<img   src={imgUrl} alt='...'/>
</Link>
</div>

<div className='card-content'>
<h3 className="card-catogory">{category}</h3>
<div className="card-title">{Title}</div>
<div className="card-price">{Price} </div>
</div>
</div>
))}
</div>
{/**books section products stops here */}

<Footer/>
</>
)
}

export default Home