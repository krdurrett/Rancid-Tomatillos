import { React, Component } from 'react'
import MovieDetail from './MovieDetail'
import './MovieDetailContainer.css'

class MovieDetailContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movieId: this.props.movieId,
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
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.state.movieId}`)
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

  render() {
    if (!this.state.error) {
      return (
        <section className='movie-detail-container'>
          <div className='title'>
            <h1>Selected movie</h1>
          </div>
          <div className='movie-detail'>
            <MovieDetail details={this.state.selectedMovie}/>
          </div>
        </section>
      )
    } else {
      return ( 
        <h2>Sorry, there was a problem with our network</h2>
      )
    }
  }
}  
  // return (
  //   <section className='movie-detail-container'>
  //     <div className='title'>
  //       <h1>Selected movie</h1>
  //     </div>
  //     <div className='movie-detail'>
  //       <MovieDetail details={selectedDetails}/>
  //     </div>
  //   </section>
  // )


export default MovieDetailContainer