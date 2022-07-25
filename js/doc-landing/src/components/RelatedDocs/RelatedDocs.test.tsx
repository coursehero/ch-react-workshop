import { screen } from '@testing-library/react'

import { MOCK_RELATED_DOCS } from '../../test-utils/mocks'
import { renderWithRouter } from '../../test-utils/utils'

import { RelatedDocs } from './RelatedDocs'

const setup = ({ related = MOCK_RELATED_DOCS }) => {
  return renderWithRouter(RelatedDocs, { related })
}

describe('Related Docs Test', () => {
  describe('Basic rendering', () => {
    beforeEach(() => {
      setup({})
    })

    it('renders on screen properly', async () => {})

    /*
    / ALTERNATE APPROACH - Discuss Schools of thought behind both
    */

    it('renders the title on screen properly', async () => {})
    it('renders the ordered list on screen properly', async () => {})
    it('renders each item in the list', async () => {})
  })

  // Assertions for elements that are no longer there

  describe('When no related documents are provided', () => {
    it('does not render a list when no related docs are supplied', () => {})
  })
})
