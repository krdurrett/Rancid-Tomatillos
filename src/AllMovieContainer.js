import React from 'react'
import MovieCard from './MovieCard'
import { Link } from 'react-router-dom'
import './AllMovieContainer.css'

const AllMovieContainer = ({ movies, onChange, value }) => {
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
        <section className='all-movie-page'>
            <nav className='nav-bar-all-movie'>
                <Link to='/' className='home-button'>🍿Rancid Tomatillos</Link>
                <input name="searchValue" type="text" className="search-bar" placeholder="Search Movie Titles" onChange={(event) => onChange(event)} value={value} />
            </nav>
            <section className='all-movie-container'>
                <div className='title'>
                    <h1>All Movies</h1>
                </div>
                <div className='movie-cards'>
                    {allMovies}
                </div>
            </section>
        </section>
    )
}

export default AllMovieContainer