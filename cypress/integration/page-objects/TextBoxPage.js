/// <reference types="Cypress" />





 export class TextBoxPage{

    elements={
        userNameInput : ()=> cy.get('#userName'),
        emailInput:() =>  cy.get('#userEmail'),
        addressInput:()=> cy.get('#currentAddress'),
        permanentAddressInput:()=> cy.get('#permanentAddress'),
        submitButton:()=> cy.get('#submit'),
        formParagraph: () => cy.get('div#output>div')
        
        
    }

    enterUserName (fullName){
        this.elements.userNameInput().type(fullName)
    }

    enterMailField (email){
        this.elements.emailInput().type(email)
    }

    enterCurrentAddress (currentAddress){
        this.elements.addressInput().type(currentAddress)
    }

    enterPermanentAddress (permanentAddress){
        this.elements.permanentAddressInput().type(permanentAddress)
    }

    clickSubmitButton (){
        this.elements.submitButton().click()
    }

    verifyValuesInParagraph (){
        return this.elements.formParagraph()
    }



} export const textBoxPage = new TextBoxPage()