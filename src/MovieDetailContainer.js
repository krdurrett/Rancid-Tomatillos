import { React, Component } from 'react'
import MovieDetail from './MovieDetail'
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
        <div className='title'>
          <h1>Selected movie</h1>
        </div>
        <div className='movie-detail'>
          {/* <MovieDetail details={this.state.selectedMovie} previews={this.state.previews}/> */}
          <MovieDetail movieId={this.state.movieId} />
        </div>
      </section>
    )
  } 
} 


export default MovieDetailContainer