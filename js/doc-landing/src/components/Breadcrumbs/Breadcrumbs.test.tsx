import * as React from 'react'
import { render, within } from '@testing-library/react'

import { DEFAULT_DOC } from '../../constants'
import { MOCK_DOCS, MOCK_BREADCRUMBS } from '../../test-utils/mocks'

import { Breadcrumbs } from './Breadcrumbs'

describe('Breadcrumbs', () => {
  test('Renders the Breadcrumbs component', () => {
    const { getAllByRole } = render(<Breadcrumbs items={MOCK_BREADCRUMBS} />)

    const breadcrumbItems = getAllByRole('listitem')
    expect(breadcrumbItems).toHaveLength(3)

    breadcrumbItems.forEach((item, index) => {
      const { getByText } = within(item)
      expect(getByText(MOCK_BREADCRUMBS[index])).toBeInTheDocument()
    })
  })
})
