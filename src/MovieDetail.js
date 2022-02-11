import { render } from '@testing-library/react'
import React, { Component } from 'react'
import ReactPlayer from 'react-player/youtube'  
import './MovieDetail.css'

class MovieDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: this.props.details.genres.join(','),
      rating: Math.round(this.props.details.average_rating * 100) / 100,
      releaseDate: this.props.details.release_date.slice(5, 10).concat(`-${this.props.details.release_date.slice(0, 4)}`),
      budget: this.props.details.budget.toLocaleString(),
      revenue: this.props.details.revenue.toLocaleString(),
      previewURL: `https://www.youtube.com/watch?v=${this.props.previews[0].key}`,
      control: true,
      width: '',
      height: ''
    }
  }
  
  render() {
    return (
      <section className='movie-details-section'>
        <div className='background-img-container'>
          {/* <img className='background-img' src={details.backdrop_path}/>  */}
          <ReactPlayer className='player' url={this.state.previewURL} controls={true} light={this.props.details.backdrop_path} width='' height='' />
        </div>
        <div className='movie-details-container'>
          <img className='poster-img' src={this.props.details.poster_path} />
          <div className='movie-details'>
            <div className='movie-title-div'>
              <h3>{this.props.details.title}</h3>   
              <h3>Rating: {this.state.rating}</h3>
              {!!this.props.details.runtime && <h3>Runtime: {this.props.details.runtime} minutes</h3>} 
            </div>
            <div className='overview-div'>
              <p>{this.props.details.tagline}</p>
              <p>{this.props.details.overview}</p>
              {!!this.props.details.genres.length && <p>Genres: {this.state.genres}</p>}
            </div>
            <div className='budget-div'>
              {!!this.props.details.budget && <p>Budget: ${this.state.budget}</p>}
              {!!this.props.details.revenue && <p>Total Revenue: ${this.state.revenue}</p>}
              <p>Release Date: {this.state.releaseDate}</p>
            </div>
          </div>
        </div>  
      </section>  
    )
  }
  
}

export default MovieDetail

//details previews