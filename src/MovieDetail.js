import React from 'react'
import './MovieDetail.css'

const MovieDetail = ({ details }) => {
  console.log('movie detail passed',details);
  return (
    <section className='movie-details-section'>
      <div className='background-img-container'>
        <img className='background-img' src={details.backdrop_path}/> 
      </div>
      <div className='movie-details-container'>
        <img className='poster-img' src={details.poster_path} />
        <div className='movie-details'>
          <h2 className='movie-title'>{details.title} Rating:{details.average_rating}</h2>
          <p>{details.tagline}</p>
          <p>{details.overview}</p>
        </div>
      </div>
      
    </section>  
  )
}

export default MovieDetail