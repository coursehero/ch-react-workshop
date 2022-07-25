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
    it('renders on screen properly', async () => {
      // validates heading
      expect(
        screen.getByRole('heading', {
          name: 'Students who viewed this also studied',
        }),
      ).toBeInTheDocument()

      // validates list
      expect(screen.getAllByRole('listitem')).toHaveLength(3)

      // validates each list item
      MOCK_RELATED_DOCS.forEach((doc: string) => {
        expect(screen.getByTestId(`related-doc-${doc}`)).toBeInTheDocument()
        expect(screen.getByRole('link', { name: doc })).toBeInTheDocument()
      })
    })

    /*
    / ALTERNATE APPROACH - Discuss Schools of thought behind both
    */
    it('renders the title on screen properly', async () => {
      expect(
        screen.getByRole('heading', {
          name: 'Students who viewed this also studied',
        }),
      ).toBeInTheDocument()
    })
    it('renders the ordered list on screen properly', async () => {
      expect(screen.getAllByRole('listitem')).toHaveLength(3)
    })

    it('renders each item in the list', async () => {
      MOCK_RELATED_DOCS.forEach((doc: string) => {
        expect(screen.getByTestId(`related-doc-${doc}`)).toBeInTheDocument()
      })
    })
  })

  // Assertions for elements that are no longer there

  describe('When no related documents are provided', () => {
    it('does not render a list when no related docs are supplied', () => {
      setup({ related: [] })
      // All Three Do the same thing! So how do we decide which is the best practice
      expect(screen.getByRole('list')).not.toContain('ChildComponent')
      expect(screen.queryByRole('listitem')).toBeNull()
      MOCK_RELATED_DOCS.forEach((doc: string) => {
        expect(screen.queryByTestId(`related-doc-${doc}`)).toBeNull()
      })
    })
  })
})
