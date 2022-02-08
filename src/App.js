import React, { Component } from 'react'
import AllMovieContainer from './AllMovieContainer'
import MovieDetailContainer from './MovieDetailContainer'
import { NavLink, Route, Link } from 'react-router-dom'
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
      error: false
    }
  }

  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(data => this.setState({ allMoviesData: data.movies}))
      .catch(() => this.setState({ error: true}))
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
    }, error: false})
  }

  selectMovie = (id) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then(response => this.handleResponse(response))    
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
          {/* <button onClick={this.returnHome} className='home-button'>🍿Rancid Tomatillos</button> */}
          <Link to='/' className='home-button'>🍿Rancid Tomatillos</Link>
        </nav>
        {/* {this.state.error && <h2>Sorry, there was a problem with our network</h2>}
        {!this.state.error && this.displayMovieDetails()} */}
        <Route exact path='/' render={() => <AllMovieContainer movies={this.state.allMoviesData}/>} />
        <Route exact path='/:id' render={({ match }) => 
          {const movieId = match.params.id
            fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieId}`)
              .then(response => this.handleResponse(response)) 
          return <MovieDetailContainer selectedDetails={this.state.selectedMovie}/>
        }}/>
      </main>
    )
  }
}

export default App
