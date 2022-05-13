
describe('Search Elements', ()=> {

    beforeEach(()=>{
        cy.visit('/');
    })

    it('Search for elements with multiple results', ()=>{
        //cy.visit('/');
        cy.fixture('index').then((index)=>{
            cy.get(index.searchBox).type('dress');
            cy.get(index.searchButton).click();
        });

        cy.fixture('searchResult').then((searchResult)=>{
            cy.get(searchResult.title).should('contain', 'dress'); //debe contener la palabra dress
        });

    })


    it('Search for elements with no results', ()=>{
        cy.fixture('index').then((index)=>{
            cy.get(index.searchBox).type('qwerty');
            cy.get(index.searchButton).click();
        });

        cy.fixture('searchResult').then((searchResult)=>{
            cy.get(searchResult.alert).should('contain', 'No results'); //debe contener la palabra dress
        });

    })


})