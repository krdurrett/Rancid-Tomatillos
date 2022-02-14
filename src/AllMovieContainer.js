import React, { Component } from 'react'
import MovieCard from './MovieCard'
import { Link } from 'react-router-dom'
import './AllMovieContainer.css'

class AllMovieContainer extends Component  {
    constructor(props) {
        super(props)
    }
    
    render() {
        let allMovies = this.props.movies.map(movie => {
            return (
                    <MovieCard
                        id={movie.id}
                        key={movie.id}
                        image={movie.poster_path}
                        title={movie.title}
                    />
            )
        })
        if (!this.props.error && this.props.filteredMovies.length > 0 && !this.props.isLoading) {
            return (
          <section className='all-movie-page'>
                <nav className='nav-bar-all-movie'>
                    <Link to='/' className='home-button'>🍿Rancid Tomatillos</Link>
                    <input name="searchValue" type="text" className="search-bar" placeholder="Search Movie Titles" onChange={(event) => this.props.onChange(event)} value={this.props.value} />
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
        } else if (this.props.error) {
            return (
                <section className='all-movie-page'>
                    <nav className='nav-bar-all-movie'>
                        <Link to='/' className='home-button'>🍿Rancid Tomatillos</Link>
                        <input name="searchValue" type="text" className="search-bar" placeholder="Search Movie Titles" onChange={(event) => this.props.onChange(event)} value={this.props.value} />
                    </nav>
                    <section className='all-movie-container'>
                        <h2>Sorry, there was a problem with our network</h2>
                    </section>
                </section>
            )
        } else if (this.props.filteredMovies.length === 0 && !this.props.isLoading) {
            return (
                <section className='all-movie-page'>
                    <nav className='nav-bar-all-movie'>
                        <Link to='/' className='home-button'>🍿Rancid Tomatillos</Link>
                        <input name="searchValue" type="text" className="search-bar" placeholder="Search Movie Titles" onChange={(event) => this.props.onChange(event)} value={this.props.value} />
                    </nav>
                    <section className='all-movie-container'>
                        <h2>Sorry no movies found from your search criteria</h2>
                    </section>
                </section>
            )
        } else if (this.props.isLoading) {
            return (
                <section className='all-movie-page'>
                    <nav className='nav-bar-all-movie'>
                        <Link to='/' className='home-button'>🍿Rancid Tomatillos</Link>
                        <input name="searchValue" type="text" className="search-bar" placeholder="Search Movie Titles" onChange={(event) => this.props.onChange(event)} value={this.props.value} />
                    </nav>
                    <section className='all-movie-container'>
                        <h2>Loading...</h2>
                    </section>
                </section>
            ) 
        }
    }
}

export default AllMovieContainer