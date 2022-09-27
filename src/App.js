import { Routes,Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./Components/Home";
import NoPage from "./pages/NoPage";
import Technology from "./pages/Technology";
import Music from "./pages/Music";
import Movies from "./pages/Movies";
import ScrollToTop from "./ScrollToTop";
import Playstation from "./pages/Playstation";
import Xbox from "./pages/Xbox";
import Nintendo from "./pages/Nintendo";
import PCgaming from "./pages/PCgaming";
import MobileGaming from "./pages/Mobilegaming";
import Household from './pages/Household'
import Outdoors from './pages/Outdoors'
import Toys from './pages/Toys'
import Books from './pages/Books'
import Beauty from './pages/Beauty'
import ProductDetails from "./DetailPages/ProductDetails";
import MovieProductDetails from "./DetailPages/MovieProductDetails";
import MusicProductDetails from "./DetailPages/MusicProductDetails";
import FeaturedHomeProductDetails from "./DetailPages/FeaturedHomeproductDetails";
import FeaturedHomeMovieDetails from "./DetailPages/FeaturedHomeMovieDetails";
import FeaturedTechProductDetails from "./DetailPages/FeaturedTechProductDetails";
import FeaturedGamingProductDetails from "./DetailPages/FeaturedGamingProductDetails";
import FeaturedMusicProductDetails from "./DetailPages/FeaturedMusicProductDetails";
import FeaturedHomeOutDoorDetails from "./DetailPages/FeaturedMusicProductDetails";
import FeaturedHomeToysDetails from "./DetailPages/FeaturedHomeToysDetails";
import FeaturedHomeBooksDetails from "./DetailPages/FeaturedHomeBooksDetails";
import FeaturedHomeBeautyDetails from "./DetailPages/FeaturedHomeBeautyDetails";
import TechProductDetails from "./DetailPages/TechProductDetails";
import GamingProductDetails from "./DetailPages/GamingProductDetails";
import HouseholdProductDetails from "./DetailPages/HouseHoldProductDetails";
import FeaturedHouseProductDetails from "./DetailPages/FeaturedHouseProductDetails";
import OutDoorProductDetails from "./DetailPages/OutDoorProductDetails";
import ToysProductDetails from "./DetailPages/ToysProductDetails";
import BooksProductDetails from './DetailPages/BooksProductDetails'
import HomeBeautyProductDetails from "./DetailPages/HomeBeautyProductDetails";
function App() {
return (
<>
<ScrollToTop>
<Routes>
<Route index element={<Home/>}/>


{/*navbar */}

<Route path="/technology" element={<Technology/>}/>
<Route path="/music" element={<Music/>}/>

<Route path="/movies" element={<Movies/>}/>
{/*navbar */}

{/*make money */}
{/*make money */}


{/*footer shop by department */}
<Route path="/household" element={<Household/>}/>
<Route path="/toyskids&baby" element={<Toys/>}/>
<Route path="/books" element={<Books/>}/>
<Route path="/beauty" element={<Beauty/>}/>
<Route path="/outdoors&sports" element={<Outdoors/>}/>
{/*footer shop by department */}

{/*footer gaming */}
<Route path="/playstation" element={<Playstation/>}/>
<Route path="/xbox" element={<Xbox/>}/>
<Route path="/nintendo" element={<Nintendo/>}/>
<Route path="/pcgaming" element={<PCgaming/>}/>
<Route path="/mobilegaming" element={<MobileGaming/>}/>
{/*footer gaming */}

{/*footer let us help you */}
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>
{/*footer let us help you */}

<Route path="/featuredproducts/:slug" element={<FeaturedHomeProductDetails/>}/>
<Route path="/featuredmovieproducts/:slug" element={<FeaturedHomeMovieDetails/>}/>
<Route path="/featuredtechproducts/:slug" element={<FeaturedTechProductDetails/>}/>
<Route path="/featuredgamingproducts/:slug" element={<FeaturedGamingProductDetails/>}/>
<Route path="/featuredmusicproducts/:slug" element={<FeaturedMusicProductDetails/>}/>
<Route path="/featuredhouseproducts/:slug" element={<FeaturedHouseProductDetails/>}/>
<Route path="/featuredoutdoorproducts/:slug" element={<FeaturedHomeOutDoorDetails/>}/>
<Route path="/featuredtoysproducts/:slug" element={<FeaturedHomeToysDetails/>}/>
<Route path="/featuredbookproducts/:slug" element={<FeaturedHomeBooksDetails/>}/>
<Route path="/featuredbeautyproducts/:slug" element={<FeaturedHomeBeautyDetails/>}/>
<Route path=":slug" element={<ProductDetails/>}/>
<Route path="/movieproductdetails/:slug" element={<MovieProductDetails/>}/>
<Route path="/hometechproductdetails/:slug" element={<TechProductDetails/>}/>
<Route path="/homegamingproductdetails/:slug" element={<GamingProductDetails/>}/>
<Route path="/homemusicproductdetails/:slug" element={<MusicProductDetails/>}/>
<Route path="/homehouseproductdetails/:slug" element={<HouseholdProductDetails/>}/>
<Route path="/homeoutdoorproductdetails/:slug" element={<OutDoorProductDetails/>}/>
<Route path="/hometoysproductdetails/:slug" element={<ToysProductDetails/>}/>
<Route path="/homebooksproductdetails/:slug" element={<BooksProductDetails/>}/>
<Route path="/homebeautyproductdetails/:slug" element={<HomeBeautyProductDetails/>}/>


<Route path="*" element={<NoPage/>}/></Routes>
</ScrollToTop>
</>
);
}

export default App;
