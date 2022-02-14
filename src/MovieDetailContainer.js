import { React, Component } from 'react'
import MovieDetail from './MovieDetail'
import { Link } from 'react-router-dom'
import './MovieDetailContainer.css'

class MovieDetailContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movieId: this.props.movieId
    }
  }

  render() {
    return (
      <section className='movie-detail-container'>
        <nav className='nav-bar'>
          <Link to='/' className='home-button'>🍿Rancid Tomatillos</Link>
        </nav>
        <div className='title'>
          <h1>Selected movie</h1>
        </div>
        <div className='movie-detail'>
          <MovieDetail movieId={this.state.movieId} />
        </div>
      </section>
    )
  } 
} 


export default MovieDetailContainer