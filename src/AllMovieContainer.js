import React from 'react'
import MovieCard from './MovieCard'
import './AllMovieContainer.css'

const AllMovieContainer = ({ movies }) => {
    let allMovies = movies.map(movie => {
        return (
                <MovieCard
                    id={movie.id}
                    key={movie.id}
                    image={movie.poster_path}
                    title={movie.title}
                />
        )
    })

    return (
        <section className='all-movie-container'>
            <div className='title'>
                <h1>All Movies</h1>
            </div>
            <div className='movie-cards'>
                {allMovies}
            </div>
        </section>
    )
}

export default AllMovieContainer