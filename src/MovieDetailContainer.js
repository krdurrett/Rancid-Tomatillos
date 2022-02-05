import React from 'react'
import MovieDetail from './MovieDetail'
import './MovieDetailContainer.css'

const MovieDetailContainer = ({ selectedDetails }) => {
  console.log('selectedDetails passed',selectedDetails);
  return (
    <section className='movie-detail-container'>
      <div className='title'>
        <h1>Selected movie</h1>
      </div>
      <div className='movie-detail'>
        <MovieDetail details={selectedDetails}/>
      </div>
    </section>
  )
}

export default MovieDetailContainer