import React, { Component } from 'react'
import AllMovieContainer from './AllMovieContainer'
import MovieDetailContainer from './MovieDetailContainer'
import { Route, Link } from 'react-router-dom'
import {allMovies} from './api-calls'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      allMoviesData: [],
      error: false,
    }
  }

  componentDidMount = () => {
      allMovies()
      .then(data => this.setState({ allMoviesData: data.movies, error: false}))
      .catch(() => this.setState({ error: true}))
  }

  render() {
    return (
      <main className='main'>
        <nav className='nav-bar'>
          <Link to='/' className='home-button'>🍿Rancid Tomatillos</Link>
        </nav>
        <Route exact path='/' render={() => {
          return !this.state.error ? <AllMovieContainer movies={this.state.allMoviesData}/> : <h2>Sorry, there was a problem with our network</h2> }} />
        <Route exact path='/:id' render={({ match }) => 
          {const movieId = match.params.id
          return <MovieDetailContainer movieId={movieId} />
        }}/>
      </main>
    )
  }
}

export default App
