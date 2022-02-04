import React from 'react'
import './MovieCard.css'
import AllMovieContainer from './AllMovieContainer'

const MovieCard = ({ id, image, title}) => {
    return (
        //create onClick event listener on section
      <section className='movie-card'>
          <img src={image}/>
          <h2>{title}</h2>
      </section>  
    )
}

export default MovieCard