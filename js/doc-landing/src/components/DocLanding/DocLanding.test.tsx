import * as React from 'react'
import {
  render,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Route } from 'react-router-dom'

import { DEFAULT_DOC } from '../../constants'
import { MOCK_DOCS } from '../../test-utils/mocks'

import { DocLanding } from './DocLanding'

const renderComponent = () => {
  return render(
    <MemoryRouter initialEntries={[`/${DEFAULT_DOC}`]}>
      <Route path="/:docName">
        <DocLanding />
      </Route>
    </MemoryRouter>,
  )
}

describe('DocLanding', () => {
  test('Renders the initial document', async () => {
    const { getByTestId, getByText } = renderComponent()

    await waitForElementToBeRemoved(() => getByTestId('doc-landing-spinner'))
    await waitFor(() => {
      expect(
        getByTestId(`doc-title-${MOCK_DOCS[DEFAULT_DOC].name}`),
      ).toBeInTheDocument()
      expect(
        getByTestId(`doc-school-${MOCK_DOCS[DEFAULT_DOC].school}`),
      ).toBeInTheDocument()
      expect(getByText(MOCK_DOCS[DEFAULT_DOC].text)).toBeInTheDocument()
    })
  })

  test('Can navigate to a related document', async () => {
    const { getByTestId, getByText } = renderComponent()

    await waitForElementToBeRemoved(() => getByTestId('doc-landing-spinner'))
    userEvent.click(getByTestId('related-doc-HOW'))
    await waitFor(() => {
      expect(getByText(MOCK_DOCS['HOW'].text)).toBeInTheDocument()
    })
  })
})
