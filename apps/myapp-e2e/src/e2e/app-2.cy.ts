import { getGreeting } from '../support/app.po';

describe('myapp-e2e second test', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains(/Hello there/);
  });
});
