import React, { Component } from 'react'
import AllMovieContainer from './AllMovieContainer'
import MovieDetailContainer from './MovieDetailContainer'
import { Route } from 'react-router-dom'
import {allMovies} from './api-calls'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      allMoviesData: [],
      error: false,
      searchValue: '', 
      filteredMovies: [],
      isLoading: true
    }
  }

  componentDidMount = () => {
      allMovies()
      .then(data => this.setState({ allMoviesData: data.movies, filteredMovies: data.movies, error: false, isLoading: false}))
      .catch(() => this.setState({ error: true}))
  }

  movieSearch = (event) => {
    event.preventDefault()
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({ [name]: value})
    if(!value) {
      this.setState({filteredMovies: this.state.allMoviesData})
    } else if (value) {
      let filterMovies = this.state.allMoviesData.filter(movie => {
        return movie.title.toLowerCase().includes(this.state.searchValue.toLowerCase())
      })
      if(filterMovies.length === 0) {
        this.setState({filteredMovies: []})
      } else {
        this.setState({filteredMovies: filterMovies})
      }
    }
  }

  render() {
    return (
      <main className='main'>
        <Route exact path='/' render={() => {
            return <AllMovieContainer isLoading={this.state.isLoading} filteredMovies={this.state.filteredMovies} error={this.state.error} movies={this.state.filteredMovies} onChange={this.movieSearch} value={this.state.searchValue}/>
          }}/>
        <Route exact path='/:id' render={({ match }) => 
          {const movieId = match.params.id
          return <MovieDetailContainer movieId={movieId} />
        }}/>
      </main>
    )
  }
}

export default App
