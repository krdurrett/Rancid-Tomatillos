import React from 'react'
import './MovieDetail.css'

const MovieDetail = ({ details }) => {

  let genres = details.genres.join(',');
  
  return (
    <section className='movie-details-section'>
      <div className='background-img-container'>
        <img className='background-img' src={details.backdrop_path}/> 
      </div>
      <div className='movie-details-container'>
        <img className='poster-img' src={details.poster_path} />
        <div className='movie-details'>
          <h2 className='movie-title'>{details.title} Rating:{details.average_rating} Runtime:{details.runtime}</h2>
          <div>
            <p>{details.tagline}</p>
            <p>{details.overview}</p>
            <p>{genres}</p>
          </div>
          <div>
            <p>{details.budget}</p>
            <p>{details.revenue}</p>
            <p>{details.release_date}</p>
          </div>
        </div>
      </div>
      
    </section>  
  )
}

export default MovieDetail