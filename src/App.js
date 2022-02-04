import React, { Component } from 'react'
import movieData from './movieData'
import AllMovieContainer from './AllMovieContainer'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      allMoviesData: movieData.movies
    }
  }

  render() {
    return (
      <main className='main'>
        <nav className='nav-bar'>
          {/* remember to add onClick event listener to button */}
          <button className='home-button'>🍿Rancid Tomatillos</button>
        </nav>
        {/* <AllMovieContainer movies={this.state.allMoviesData}/> */}
      </main>
    )
  }
}

export default App
