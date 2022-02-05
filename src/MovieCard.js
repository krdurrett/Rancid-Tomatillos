import React from 'react'
import './MovieCard.css'

const MovieCard = ({ id, image, title, selectMovie}) => {
    return (
      <section onClick={() => selectMovie(id)}className='movie-card'>
          <img className='movie-img' src={image}/>
          <h2 className='movie-title'>{title}</h2>
      </section>  
    )
}

export default MovieCard