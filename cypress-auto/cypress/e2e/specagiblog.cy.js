
/* Template de Teste - Agiblog */
describe('Template de Teste - Agiblog ', () => {

    /* Cenario 01 - Acessar URL  */ 
    it('p1 - 1. acessa url agibank', () => {
    // 1. acessa url agibank 
    cy.visit('https://blog.agibank.com.br/')
    cy.wait(2000); 
    cy.get('.uagb-block-f8dfd415 > .uagb-heading-text').contains('Stories');
    })
            
 /* Cenario 02 - Validar MENU  - O agibank*/ 
  it('Cenario 02 - Validar MENU  - O agibank', () => {
  cy.visit('https://blog.agibank.com.br/')
  cy.get('#menu-item-3713 > [href="https://blog.agibank.com.br/institucional/"] > .menu-text')
    .should('be.visible');
});

  /* Cenario 03 - Validar MENU  - Produtos*/
  it('Cenario 03 - Validar MENU  - Produtos', () => {
    cy.visit('https://blog.agibank.com.br/')
    cy.get('#menu-item-3714 > [href="https://blog.agibank.com.br/produtos/"] > .menu-text')
     .should('be.visible');
  }
);


 
  /* Cenario 04 - Validar MENU  - Serviços*/
  it('Cenario 04 - Validar MENU  - Serviços', () => {
  cy.visit('https://blog.agibank.com.br/')
    cy.get('#menu-item-3715 > .menu-link > .menu-text')
     .should('be.visible');
  }
);



 

  /* Cenario 05 - Validar MENU  - Finanças*/
  it('Cenario 05 - Validar MENU  - Finanças', () => {
  cy.visit('https://blog.agibank.com.br/')
    cy.get('#menu-item-3717 > .menu-link > .menu-text')
     .should('be.visible');
  }
);

 

  /* Cenario 06 - Validar MENU  - Benefícios*/
  it('Cenario 06 - Validar MENU  - Benefícios', () => {
  cy.visit('https://blog.agibank.com.br/')
    cy.get('#menu-item-9871 > .menu-link > .menu-text')
     .should('be.visible');
  }
);


  /* Cenario 07 - Validar MENU  - Sua segurança*/
  it('Cenario 07 - Validar MENU  - Sua segurança', () => {
  cy.visit('https://blog.agibank.com.br/')
    cy.get('#menu-item-3716 > .menu-link > .menu-text')
     .should('be.visible');
  }
);


  


  /* Cenario 08 - Validar MENU  - Stories*/
  it('Cenario 08 - Validar MENU  - Stories', () => {
  cy.visit('https://blog.agibank.com.br/')
    cy.get('#menu-item-5582 > .menu-link > .menu-text')
     .should('be.visible');
  }
);

/* Cenario 09 - Acessar pagina - NOticias */
  it('Cenario 09 - Acessar pagina - NOticias', () => {
  cy.visit('https://blog.agibank.com.br/noticias/')
  cy.wait(2000);
  cy.get('.page-title').should('be.visible');
  cy.get('.page-title').contains('Notícias');
    
  }
);


/* Cenario 10 - Validar post 21325 data publicação*/
  it('Cenario 10 - Validar post 21325 data publicação', () => {
  cy.visit('https://blog.agibank.com.br/noticias/')
  cy.wait(2000);
  cy.get('.page-title').contains('Notícias');
  cy.get('#post-21325 > .ast-post-format- > .post-content > .entry-header > .entry-meta > .posted-on > .published')
      .should('be.visible');
  }
);


/* Cenario 10.1 - Validar post 21325 titulo  */
//evidência de falha pois no site o titulo para post 21325, não foi inserido 
  it('Cenario 10.1 - Validar post 21325 titulo', () => {
  cy.visit('https://blog.agibank.com.br/noticias/')
  cy.wait(2000);
   cy.get('#post-21325 > .ast-post-format- > .post-content >  .entry-title > a')
    .should('be.visible');
  }
);

    



       
  
 
 

  /* 
  // 2. Verificar se o botão "O Agibank" está presente na tela
    
    cy.get('#menu-item-3713 > [href="https://blog.agibank.com.br/institucional/"] > .menu-text').click() 
    
    // 3. Verificar se o botão "Notícias" está presente na tela
    const f = "#ast-hf-mobile-menu > li.menu-item.menu-item-type-taxonomy.menu-item-object-category.current-menu-item.menu-item-has-children.menu-item-3713.ast-mm-has-desc > ul > li.menu-item.menu-item-type-taxonomy.menu-item-object-category.menu-item-3718"
    cy.get(f).click();
    
   
    
    // 4. Clicar no botão "Notícias"
    const c = "//li[@id='menu-item-3718']//span[@class='menu-text'][normalize-space()='Notícias']"
    cy.get(c).click();

    // 5. Verificar se o elemento título "Notícias" está presente na tela
    cy.wait(1000)
    const d = "//h1[normalize-space()='Notícias']"
    cy.get(d).should('be.visible');
    
 */ 


      })

 

 
  
  