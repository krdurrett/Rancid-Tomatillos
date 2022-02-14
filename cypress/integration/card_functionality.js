describe('Card functionality', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('Should be able to click on a movie card to view movie details', () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/619592',
      {
        statusCode: 201,
        body: {
            "id": 619592,
            "poster_path": "https://image.tmdb.org/t/p/original//ucktgbaMSaETUDLUBp1ubGD6aNj.jpg",
            "backdrop_path": "https://image.tmdb.org/t/p/original//eIqyISB5j99OSRZUuvdN9g2bBsS.jpg",
            "title": "Force of Nature",
            "average_rating": 4.4,
            "release_date": "2020-07-02"
            }
      })
      .wait(1500)
      .get('.movie-cards').click(100, 20)
        .get('.movie-detail-container')
          .contains('Selected movie')
      .url().should('include', '/694919')
  });
   it('Should show Loading... while movie details load', () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/619592',
      {
        statusCode: 201,
        body: {
            "id": 619592,
            "poster_path": "https://image.tmdb.org/t/p/original//ucktgbaMSaETUDLUBp1ubGD6aNj.jpg",
            "backdrop_path": "https://image.tmdb.org/t/p/original//eIqyISB5j99OSRZUuvdN9g2bBsS.jpg",
            "title": "Force of Nature",
            "average_rating": 4.4,
            "release_date": "2020-07-02"
            }
      })
      .wait(1500)
      .get('.movie-cards').click(100, 20)
        .get('.movie-detail-container')
          .get('.movie-detail')
            .contains('Loading...')
  });

  it('Should be able to display error message when network fails', () => {
    cy.intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies/619592', {
      statusCode: 500
    })
      .visit('http://localhost:3000/619592')
        .get('h2')
           .contains('Sorry, there was a problem with our network')
  })
});