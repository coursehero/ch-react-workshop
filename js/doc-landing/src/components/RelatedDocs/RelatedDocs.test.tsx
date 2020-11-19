import * as React from 'react'
import { render, within } from '@testing-library/react'
import { MemoryRouter, Route } from 'react-router-dom'

import { DEFAULT_DOC, RELATED_DOCS_VIEWED } from '../../constants'
import { MOCK_RELATED_DOCS } from '../../test-utils/mocks'

import { RelatedDocs } from './RelatedDocs'

describe('Related Docs', () => {
  test('Renders related docs list', () => {
    const { getByText, getAllByRole } = render(
      <MemoryRouter initialEntries={[`/${DEFAULT_DOC}`]}>
        <Route path="/:docName">
          <RelatedDocs related={MOCK_RELATED_DOCS} />,
        </Route>
      </MemoryRouter>,
    )

    const relatedDocsList = getAllByRole('listitem')

    expect(getByText(RELATED_DOCS_VIEWED)).toBeInTheDocument()
    expect(relatedDocsList).toHaveLength(3)
    relatedDocsList.forEach((doc, index) => {
      const { getByText } = within(doc)
      expect(getByText(MOCK_RELATED_DOCS[index])).toBeInTheDocument()
    })
  })
})
