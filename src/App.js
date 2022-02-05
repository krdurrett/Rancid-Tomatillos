import React, { Component } from 'react'
import movieData from './movieData'
import AllMovieContainer from './AllMovieContainer'
import MovieDetailContainer from './MovieDetailContainer'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      allMoviesData: movieData.movies,
      selectedMovie: {
        id: 0, 
        poster_path: '',
        backdrop_path: '',
        release_date: '', 
        overview: '', 
        average_rating: 0,
        genres: [], 
        budget: 0, 
        revenue: 0, 
        runtime: 0, 
        tagline: '' 
      }
    }
  }

  returnHome = () => {
    this.setState({ selectedMovie: {id: 0, 
        title: '', 
        poster_path: '', 
        backdrop_path: '', 
        release_date: '', 
        overview: '', 
        average_rating: 0,
        genres: [], 
        budget:0, 
        revenue:0, 
        runtime:0, 
        tagline: '' 
    }})
  }

  selectMovie = (id) => {
    this.setState({ selectedMovie: {id: 1, 
        title: "Fake Movie Title", 
        poster_path: "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg", 
        backdrop_path: "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg", 
        release_date: "2019-12-04", 
        overview: "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!", 
        average_rating: 6,
        genres: ["Drama"], 
        budget:63000000, 
        revenue:100853753, 
        runtime:139, 
        tagline: "It's a movie!" 
    }})
  }

  displayMovieDetails = () => {
    if (this.state.selectedMovie.poster_path === '') {
      return <AllMovieContainer movies={this.state.allMoviesData} selectMovie={this.selectMovie}/>
    } else {
      return <MovieDetailContainer selectedDetails={this.state.selectedMovie}/>
    }
  }

  render() {
    return (
      <main className='main'>
        <nav className='nav-bar'>
          {/* remember to add onClick event listener to button */}
          <button onClick={this.returnHome} className='home-button'>🍿Rancid Tomatillos</button>
        </nav>
        {this.displayMovieDetails()}
      </main>
    )
  }
}

export default App
