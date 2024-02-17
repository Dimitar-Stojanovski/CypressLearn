/// <reference types="Cypress" />

import { textBoxPage } from "../integration/page-objects/TextBoxPage"


describe('First Test Suite',()=>{
    beforeEach(()=>{
        
          cy.visit('/text-box')
    })


   it('Populates textbox fields and click submit',()=>{
        
        cy.get('#userName').type('Steve Harris')
        cy.get('#userEmail').type('mail@mail.com')
        cy.get('#currentAddress').type('Address 1')
        cy.get('#permanentAddress').type('Address 2')
        cy.get('#submit').click();

        //Assertions
        cy.get('div#output>div').within(()=>{
            cy.get('p').eq(0).should('have.text','Name:Steve Harris')
            cy.get('p').eq(1).should('have.text','Email:mail@mail.com')
        })
   })

   it('Populates form and clicks submit button using POM',()=>{
        textBoxPage.enterUserName('User User')
        textBoxPage.enterMailField('mail@mail.com')
        textBoxPage.enterCurrentAddress('Address 1')
        textBoxPage.enterPermanentAddress('Address2')
        textBoxPage.clickSubmitButton();
        textBoxPage.verifyValuesInParagraph().within(()=>{
            cy.get('p').eq(0).should('have.text','Name:User User')
            cy.get('p').eq(1).should('have.text','Email:mail@mail.com')
            cy.get('p').eq(2).should('contain.text','Current Address :Address 1')
            cy.get('p').eq(3).should('have.text','Permananet Address :Address2')
        })
   })
})