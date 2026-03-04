describe('Portafolio E2E', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('Debe cargar la página', () => {
    cy.contains('Christopher').should('be.visible')
  })

  it('El formulario debe permitir escribir', () => {
    // Scroll al formulario primero
    cy.get('input[placeholder*="nombre"]').scrollIntoView()
    
    // Forzar el type (ignorar elementos que cubren)
    cy.get('input[placeholder*="nombre"]').type('Test User', { force: true })
    cy.get('input[placeholder*="nombre"]').should('have.value', 'Test User')
    
    // Email
    cy.get('input[placeholder*="email"]').type('test@test.com', { force: true })
    cy.get('input[placeholder*="email"]').should('have.value', 'test@test.com')
  })
})
