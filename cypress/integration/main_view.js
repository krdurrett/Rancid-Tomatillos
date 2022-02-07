
describe('Rancid tomatillo main page load', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('Should be able to visit the page and view all movies', () => {
    cy.contains('Rancid Tomatillos')
      .get('h1')
        .contains('All Movies')
      .get('h2')
        .contains('Mulan')
      .get('section')
        .find('img')
        .should('have.attr', 'src').should('include', "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg")
  });
});