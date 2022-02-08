import React, { Component } from 'react'
import AllMovieContainer from './AllMovieContainer'
import MovieDetailContainer from './MovieDetailContainer'
import { Route, Link } from 'react-router-dom'
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
      }, 
      error: false,
    }
  }

  handleResponse = response => {
    if (!response.ok) {
      this.setState({ error: true})
    } else {
      Promise.resolve(response)
        .then(response => response.json())
        .then(data => this.setState({ selectedMovie: data.movie}))
        .catch(() => this.setState({ error: true}))
    }
  }

  render() {
    return (
      <main className='main'>
        <nav className='nav-bar'>
          <Link to='/' className='home-button'>🍿Rancid Tomatillos</Link>
        </nav>
        <Route exact path='/' render={() => {
          fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
            .then(response => response.json())
            .then(data => this.setState({ allMoviesData: data.movies, error: false, selectedMovie: {
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
            }}))
            .catch(() => this.setState({ error: true}))
          return !this.state.error ? <AllMovieContainer movies={this.state.allMoviesData}/> : <h2>Sorry, there was a problem with our network</h2> }} />
        <Route exact path='/:id' render={({ match }) => 
          {const movieId = match.params.id
            fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieId}`)
              .then(response => this.handleResponse(response)) 
            return !this.state.error ? <MovieDetailContainer selectedDetails={this.state.selectedMovie}/> : <h2>Sorry, there was a problem with our network</h2>
        }}/>
      </main>
    )
  }
}

export default App
