import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import '../css/Contact.css'
export const Contact = () => {
  document.title = 'Contact Gulime'
  return (
    <>
<Navbar/>
<div className="contact-container ">

<div className="contact-map-box">

<div style={{zIndex:'1'}} class="mapouter">
<div  class="gmap_canvas">
  <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=30728&t=&z=13&ie=UTF8&iwloc=&output=embed" 
frameborder="0" 
scrolling="no" 
marginheight="0" 
marginwidth="0">
</iframe>
<a href="https://2piratebay.org"></a>
<br/></div></div>


</div>

<div className="contact-address-box">
<div className="address-box">
<h2 className="address-title">ADDRESS</h2>
<p style={{lineHeight:'1.625',marginTop:'.25rem'}}>203 West Main Street APT.107</p>
</div>

<div className="email-box">
<h2 className="email-title">EMAIL</h2>
<a  style={{lineHeight:".1rem"}}>ztron500@email.com</a>
<h2 style={{leterSpacing:'.1rem', 
            marginTop:'1rem',
            fontSize:'.75rem',
            lineHeight:'1rem',
            fontWeight:'600'}}>PHONE</h2>
<p   style={{lineHeight:'1.625'}}>423-208-8573</p>
</div>
</div>

<form className='contact-info-box'>

<h2 >Feedback</h2>
<p >
We at Gulime are always working to make the shoppong experince
better for you. If you have any questions or feedback,
please send us them. We Value Your Feedback!</p>
      
<div style={{position:'relative', marginBottom:'1rem'}}>
<label for="name" style={{lineHeight:'1.75rem',fontSize:'.875rem'}}>Name</label>
<input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
</div>

<div style={{position:'relative', marginBottom:'1rem'}}>
<label for="email" style={{lineHeight:'1.75rem',fontSize:'.875rem'}}>Email</label>
<input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
</div>

<div style={{position:'relative', marginBottom:'1rem'}}>
<label for="message" style={{lineHeight:'1.75rem',fontSize:'.875rem'}}>Message</label>
<textarea id="message" name="message" className="contact-textarea"></textarea>
</div>

<button type='button'>Submit</button>

</form>
</div>
<Footer/>
    </>
  )
}


export default Contact