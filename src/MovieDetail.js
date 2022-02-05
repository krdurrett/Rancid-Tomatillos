import React from 'react'
import './MovieDetail.css'

const MovieDetail = ({ details }) => {

  let genres = details.genres.join(',');
  let rating = Math.round(details.average_rating * 100) / 100
  let releaseDate = details.release_date.slice(5, 10).concat(`-${details.release_date.slice(0, 4)}`)

  return (
    <section className='movie-details-section'>
      <div className='background-img-container'>
        <img className='background-img' src={details.backdrop_path}/> 
      </div>
      <div className='movie-details-container'>
        <img className='poster-img' src={details.poster_path} />
        <div className='movie-details'>
          <div className='movie-title-div'>
            <h3>{details.title}</h3>   
            <h3>Rating: {rating}</h3>
            <h3>Runtime: {details.runtime} minutes</h3>
          </div>
          <div className='overview-div'>
            <p>{details.tagline}</p>
            <p>{details.overview}</p>
            <p>Genres: {genres}</p>
          </div>
          <div className='budget-div'>
            <p>Budget: ${details.budget}</p>
            <p>Total Revenue: ${details.revenue}</p>
            <p>Release Date: {releaseDate}</p>
          </div>
        </div>
      </div>
      
    </section>  
  )
}

export default MovieDetail