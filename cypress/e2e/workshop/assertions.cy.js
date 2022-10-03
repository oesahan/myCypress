describe('Context: My First Test', () => {
    
    beforeEach('Clear Cookies', () => {
      // runs before each test in the block (before each "it" blocks)
      cy.clearCookies();
      cy.visit('/automation-practice-form');
    });
    
    
    it('Check different types of assetions', () => {
      /*
        // Should assertion
        cy.get('[for="gender-radio-2"]')
          .should('contain', 'Female')
          .and('have.class', 'custom-control-label');
    
        // Expect assertion
        cy.get('[for="gender-radio-2"]').then((element) => {
          expect(element).to.have.text('Female');
          expect(element).to.have.class('custom-control-label');
        });
*/
        cy.get("input[type='checkbox']").then((list)=>{
          expect(list).to.have.lengthOf(3);
       
          cy.wrap(list).first().check({force:true}).should('be.checked');
            //console.log(list[0]);
            cy.wrap(list).eq(1).check({force:true}).should('be.checked');
        });    
     

      });
    
  });