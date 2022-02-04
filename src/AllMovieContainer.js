import React from 'react'
import './AllMovieContainer.css'

const AllMovieContainer = (props) => {
    let allMovies = props.map(prop => {
        return <MovieCard />
    })

    return (
        <section className='all-movie-container'>
            <h1>All Movies</h1>
            {allMovies}
        </section>
    )
}

export default AllMovieContainer