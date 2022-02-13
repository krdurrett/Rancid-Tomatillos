const allMovies = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
}

const singleMovie = (id) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
}

const moviePreviews = (id) => {
   return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`)
}

export {allMovies,singleMovie,moviePreviews}