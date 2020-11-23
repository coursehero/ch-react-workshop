import { DEFAULT_DOC } from '../../src/constants'
import { MOCK_DOCS } from '../../src/test-utils/mocks'

describe('Homepage', () => {
  it('Tests the main flow', () => {
    cy.route2('/search', [
      { value: 'DADA-101', label: 'Defence against Dark Arts' },
      { value: 'MSC 102', label: 'Muddle Studies' },
    ]).as('search')
    // @ts-ignore
    cy.route2(`${Cypress.config('backendBaseUrl')}/docInfo*`)

    // @ts-ignore
    cy.visit(`${Cypress.config('backendBaseUrl')}/`)

    cy.contains('Make every study hour')
    cy.findByRole('searchbox').type('a')
    cy.wait('@search')
    cy.get('.ui-menu')
      .findByText(/dark arts/i)
      .click()

    cy.findByRole('button', { name: /unlock document/i })
    cy.findByTestId(`doc-title-${MOCK_DOCS[DEFAULT_DOC].name}`)
    cy.findByTestId(`doc-school-${MOCK_DOCS[DEFAULT_DOC].school}`)
    cy.findByText(MOCK_DOCS[DEFAULT_DOC].text)

    cy.findByTestId('related-doc-HOW').click()
    cy.findByText(MOCK_DOCS['HOW'].text).should('exist')
  })
})
