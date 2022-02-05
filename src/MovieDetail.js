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
          <h2 className='movie-title'>{details.title}   Rating: {details.average_rating}   Runtime: {details.runtime} minutes</h2>
          <div className='overview-div'>
            <p>{details.tagline}</p>
            <p>{details.overview}</p>
            <p>Genres: {genres}</p>
          </div>
          <div className='budget-div'>
            <p>Budget: ${details.budget}</p>
            <p>Total Revenue: ${details.revenue}</p>
            <p>Release Date: {details.release_date}</p>
          </div>
        </div>
      </div>
      
    </section>  
  )
}

export default MovieDetail