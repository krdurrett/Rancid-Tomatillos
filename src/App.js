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
      searchValue: '', 
      filteredMovies: []
    }
  }

  componentDidMount = () => {
      allMovies()
      .then(data => this.setState({ allMoviesData: data.movies, filteredMovies: data.movies ,error: false}))
      .catch(() => this.setState({ error: true}))
  }

  movieSearch = (event) => {
    event.preventDefault()
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({ [name]: value})
    if(!this.state.searchValue) {
      this.setState({filteredMovies: this.state.allMoviesData})
    }
    if(this.state.searchValue) {
      let filterMovies = this.state.allMoviesData.filter(movie => {
        return movie.title.toLowerCase().includes(this.state.searchValue.toLowerCase())
      })
      this.setState({filteredMovies: filterMovies})
    }
  }


  render() {
    return (
      <main className='main'>
        <nav className='nav-bar'>
          <Link to='/' className='home-button'>🍿Rancid Tomatillos</Link>
          <input name="searchValue" type="text" className="search-bar" placeholder="Search Movie Titles" onChange={event => this.movieSearch(event)} value={this.state.searchValue} />
        </nav>
        <Route exact path='/' render={() => {
          return !this.state.error ? <AllMovieContainer movies={this.state.filteredMovies}/> : <h2>Sorry, there was a problem with our network</h2> }} />
        <Route exact path='/:id' render={({ match }) => 
          {const movieId = match.params.id
          return <MovieDetailContainer movieId={movieId} />
        }}/>
      </main>
    )
  }
}

export default App
