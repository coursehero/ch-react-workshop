import {
  within,
  screen,
  fireEvent,
  waitForElementToBeRemoved,
} from '@testing-library/react'

import { MOCK_DOCS } from '../../test-utils/mocks'
import { DEFAULT_DOC } from '../../constants'
import { renderWithRouter } from '../../test-utils/utils'

import { DocLanding } from './DocLanding'

const renderComponent = () => {
  return renderWithRouter(DocLanding, {})
}

const mockFetch = jest.fn()

const setUpFetch = (resolve: boolean = true) => {
  if (resolve) {
    global.fetch = mockFetch.mockResolvedValue({
      json: () => Promise.resolve(MOCK_DOCS[DEFAULT_DOC]),
    })
  } else {
    global.fetch = mockFetch.mockRejectedValue({})
  }
}

const mockResponse = jest.fn()
const mockUrl = 'http://127.0.0.1:5005/doc-info?docName=BIO-101'
const redirectUrl = 'https://coursehero.com/register'

Object.defineProperty(window, 'location', {
  value: {
    hash: {
      endsWith: mockResponse,
      includes: mockResponse,
    },
    assign: mockResponse,
    href: mockUrl,
  },
  writable: true,
})

describe('DocLanding', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('Renders the document correct on screen', async () => {})

  test('Changes the window to correct URL when button is clicked', async () => {})

  test('Asserts error message when an error is returned from the network request', async () => {})
})
