describe('Play movie preview', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should be able to view movie preview', () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies',
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
        .get('.movie-details-section')
          .get('.background-img-container')
            .get('.player')
              .find('.react-player__preview').click()
                .get('iframe').should('have.attr', 'src').should('include', "https://www.youtube.com/embed/null?autoplay=0&mute=0&controls=1&origin=http%3A%2F%2Flocalhost%3A3000&playsinline=1&listType=playlist&playlist=aETz_dRDEys&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&widgetid=1")
      .url().should('include', '/694919')
  })
});