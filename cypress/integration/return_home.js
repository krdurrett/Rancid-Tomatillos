describe('Return home ', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/694919');
  });
  it('Should be able to return to the home page view by clicking on home button', () => {
    cy.get('.home-button').click()
      .get('.all-movie-container')
      .url().should('equal', 'http://localhost:3000/')
  });

  it('Should see error message if there is a network error', () => {
    cy.get('.home-button').click()
    cy.intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 500
    })
    .visit('http://localhost:3000')
      .get('h2')
        .contains('Sorry, there was a problem with our network')
  })
});

