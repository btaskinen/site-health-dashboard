describe('test dashboard', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('chart displays all data series', () => {
    cy.get('.MuiChartsLegend-label').should('have.length', 2)
    cy.get('.MuiChartsLegend-label').eq(0).should('have.text','Temperature (°C)')
    cy.get('.MuiChartsLegend-label').eq(1).should('have.text','Soil Moisture (%)')
  })

  it('data toggle works correctly', () => {
    cy.get('.MuiSwitch-switchBase').eq(1).click()
    cy.get('.MuiChartsLegend-label').should('have.length', 1)
    cy.get('.MuiSwitch-switchBase').eq(0).click()
    cy.get('.MuiChartsLegend-label').should('have.length', 0)
  })
})