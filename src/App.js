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
      selectedMovie: {id: 1, 
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
      }
    }
  }

  render() {
    return (
      <main className='main'>
        <nav className='nav-bar'>
          {/* remember to add onClick event listener to button */}
          <button className='home-button'>🍿Rancid Tomatillos</button>
        </nav>
        <AllMovieContainer movies={this.state.allMoviesData}/>
        {/* <MovieDetailContainer selectedDetails={this.state.selectedMovie}/> */}
      </main>
    )
  }
}

export default App
