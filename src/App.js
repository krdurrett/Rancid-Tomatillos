import React, { Component } from 'react'
import movieData from './movieData'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      allMoviesData: movieData
    }
  }

  render() {
    return (
      <main>
        <nav className='nav-bar'>
          {/* remember to add onClick event listener to button */}
          <button className='home-button'>🍿Rancid Tomatillos</button>
        </nav>
      </main>
    )
  }
}

export default App
