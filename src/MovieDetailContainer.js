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
      <section className='movie-detail-page'>
        <nav className='nav-bar-movie-detail'>
          <Link to='/' className='home-button'>🍿Rancid Tomatillos</Link>
        </nav>
        <section className='movie-detail-container'>
          <div className='title'>
            <h1>Selected movie</h1>
          </div>
          <div className='movie-detail'>
            <MovieDetail movieId={this.state.movieId} />
          </div>
        </section>
      </section>
    )
  } 
} 


export default MovieDetailContainer