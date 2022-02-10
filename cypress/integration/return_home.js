describe('Return home ', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/694919');
  });
  it('Should be able to return to the home page view by clicking on home button', () => {
    cy.get('.home-button').click()
      .get('.all-movie-container')
      .url().should('equal', 'http://localhost:3000/')
  });
});

