import React from 'react'
import '../styles/homeTopContainer.scss'
import image from '../assets/images/homeMain.jpg'

const HomeTopContainer = () => {

  return (
    <section className='HomeTopContainer'>
        <div className="content">
            <h1>Book ticket Adventure Waterpark Desaru Coast</h1> 
            <p>Travelvago is an authorized and trusted partner of the venue, offering curated experiences to enjoy this attraction.</p>
        </div>
        <div className="homeTopImgContainer">
            <img src={"https://i.postimg.cc/CMQqbZ2V/5.jpg"} alt="" />
        </div>
    </section>
  )
}

export default HomeTopContainer