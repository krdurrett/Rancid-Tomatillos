
describe('Rancid tomatillo main page load', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('Should be able to visit the page and view all movies', () => {
    cy.contains('Rancid Tomatillos')
  });
});