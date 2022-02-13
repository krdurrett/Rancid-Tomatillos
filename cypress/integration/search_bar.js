describe('Search functionality', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should be able type movie titles into search bar', () => {
    cy.get('input[type="text"]')
      .type('money plane')
      .should('have.value', 'money plane')
  })

  it('Should display filtered movie', () => {
    cy.get('input[type="text"]')
      .type('money plane')
        .get('h2')
          .contains('Money Plane')
  })

  it('Should show no movies when nothing matches the search criteria', () => {
    cy.get('input[type="text"]')
      .type('error')
          .get('h2')
            .contains('Sorry no movies found from your search criteria')
  })
});