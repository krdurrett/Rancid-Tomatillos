import React, { Component } from 'react'
import ReactPlayer from 'react-player/lazy'  
import './MovieDetail.css'

class MovieDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movieId: this.props.movieId,
      selectedMovie: {
        id: 0, 
        title: '',
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
      previews: [],
      error: false,
      isLoading: true,
      control: true,
      width: '',
      height: ''
    }
  }

  componentDidMount = () => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.state.movieId}`)
      .then(response => this.handleResponse(response))
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.state.movieId}/videos`)
      .then(response => this.handleResponse(response))
  }

  handleResponse = response => {
    if (!response.ok) {
      this.setState({ error: true})
    } else {
      Promise.resolve(response)
        .then(response => response.json())
        .then(data => {
          if (data.movie) {
            this.setState({ selectedMovie: data.movie, isLoading: false})
          } else if (data.videos) {
            this.setState({ previews: data.videos, isLoading: false})
          }})
        .catch(() => this.setState({ error: true}))
    }
  }

  render() {
    let genres = this.state.selectedMovie.genres.join(',')
    let rating = Math.round(this.state.selectedMovie.average_rating * 100) / 100
    let releaseDate = this.state.selectedMovie.release_date.slice(5, 10).concat(`-${this.state.selectedMovie.release_date.slice(0, 4)}`)
    let budget = this.state.selectedMovie.budget.toLocaleString()
    let revenue = this.state.selectedMovie.revenue.toLocaleString()
    let movieUrl
    if (this.state.previews.length > 0 && this.state.previews[0].site === 'YouTube') {
      movieUrl = this.state.previews.map(preview => `https://www.youtube.com/watch?v=${preview.key}`) 
    } else if (this.state.previews.length > 0 && this.state.previews[0].site === 'Vimeo') {
      movieUrl = `https://vimeo.com/${this.state.previews[0].key}`
    }

    if (!this.state.error && !this.state.isLoading) {
      return (
        <section className='movie-details-section'>
          <div className='background-img-container'>
            {this.state.previews.length === 0 ? <img className='background-img' src={this.state.selectedMovie.backdrop_path} /> :
               <ReactPlayer className='player' url={movieUrl} controls={true} light={this.state.selectedMovie.backdrop_path} width='' height='' /> 
            }
          </div>
          <div className='movie-details-container'>
            <img className='poster-img' src={this.state.selectedMovie.poster_path} />
            <div className='movie-details'>
              <div className='movie-title-div'>
                <h3>{this.state.selectedMovie.title}</h3>   
                <h3>Rating: {rating}</h3>
                {!!this.state.selectedMovie.runtime && <h3>Runtime: {this.state.selectedMovie.runtime} minutes</h3>} 
              </div>
              <div className='overview-div'>
                <p>{this.state.selectedMovie.tagline}</p>
                <p>{this.state.selectedMovie.overview}</p>
                {!!this.state.selectedMovie.genres.length && <p>Genres: {genres}</p>}
              </div>
              <div className='budget-div'>
                {!!this.state.selectedMovie.budget && <p>Budget: ${budget}</p>}
                {!!this.state.selectedMovie.revenue && <p>Total Revenue: ${revenue}</p>}
                <p>Release Date: {releaseDate}</p>
              </div>
            </div>
          </div>  
        </section>  
      )
    }
    if (this.state.isLoading) {
      return (
        <h2>Loading...</h2>
      )
    }
    if (this.state.error) {
      return ( 
          <h2>Sorry, there was a problem with our network</h2>
        )
    }  
  }
}

export default MovieDetail
