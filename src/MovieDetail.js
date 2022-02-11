import React from 'react'
import ReactPlayer from 'react-player/youtube'  
import './MovieDetail.css'

const MovieDetail = ({ details, previews }) => {
  
  let genres = details.genres.join(',');
  let rating = Math.round(details.average_rating * 100) / 100
  let releaseDate = details.release_date.slice(5, 10).concat(`-${details.release_date.slice(0, 4)}`)
  let budget = details.budget.toLocaleString()
  let revenue = details.revenue.toLocaleString()
  let previewURL = `https://www.youtube.com/watch?v=${previews[0].key}`
  console.log(previewURL)
  return (
    <section className='movie-details-section'>
      <div className='background-img-container'>
        <img className='background-img' src={details.backdrop_path}/> 
      </div>
      {/* <ReactPlayer /> */}
      <div className='movie-details-container'>
        <img className='poster-img' src={details.poster_path} />
        <div className='movie-details'>
          <div className='movie-title-div'>
            <h3>{details.title}</h3>   
            <h3>Rating: {rating}</h3>
            {!!details.runtime && <h3>Runtime: {details.runtime} minutes</h3>} 
          </div>
          <div className='overview-div'>
            <p>{details.tagline}</p>
            <p>{details.overview}</p>
            {!!details.genres.length && <p>Genres: {genres}</p>}
          </div>
          <div className='budget-div'>
            {!!details.budget && <p>Budget: ${budget}</p>}
            {!!details.revenue && <p>Total Revenue: ${revenue}</p>}
            <p>Release Date: {releaseDate}</p>
          </div>
        </div>
      </div>  
    </section>  
  )
}

export default MovieDetail