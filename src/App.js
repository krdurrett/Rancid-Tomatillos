import React, { Component } from 'react'
import movieData from './movieData'
import AllMovieContainer from './AllMovieContainer'
import MovieDetailContainer from './MovieDetailContainer'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      allMoviesData: [],
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

  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(data => this.setState({ allMoviesData: data.movies}))
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
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then(response => response.json())
      .then(data => this.setState({ selectedMovie: data.movie}))
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
