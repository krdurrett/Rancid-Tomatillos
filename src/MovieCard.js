import React from 'react'
import './MovieCard.css'
import {NavLink} from 'react-router-dom'

const MovieCard = ({ id, image, title}) => {
    return (
        <NavLink to={`/${id}`} className='movie-card'>
          <img className='movie-img' src={image}/>
          <h2 className='movie-title'>{title}</h2>
        </NavLink>
    )
}

export default MovieCard