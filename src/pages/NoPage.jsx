import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/NoPage.css'
export const NoPage = () => {

const navigate = useNavigate()
return (
<div className='body'>
<div className='mess-block'>
<h1 className='er404'>404</h1>
<h2 className='oops'>OOPS</h2>
<p className='oops-mess'>There doesn't seem to be anything here!</p>
</div>
<button type='button' className='homebtn' onClick={() => navigate('/')}> Home</button>
</div>
)
}

export default NoPage