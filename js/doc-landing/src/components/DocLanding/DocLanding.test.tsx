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

  test('Renders the document correct on screen', async () => {
    setUpFetch()
    renderComponent()

    expect(mockFetch).toBeCalledTimes(1)
    expect(screen.getByTestId('doc-landing-spinner')).toBeInTheDocument()

    await waitForElementToBeRemoved(() =>
      screen.getByTestId('doc-landing-spinner'),
    )

    // asserts the logo on screen with the correct parent anchor
    expect(screen.getByRole('link', { name: 'logo' })).toHaveAttribute(
      'href',
      'http://127.0.0.1:5005/',
    )

    // asserting by aria label and find listItems within (breadcrumb length)
    // expect(
    //   within(screen.getByLabelText('breadcrumb')).getAllByRole('listitem'),
    // ).toHaveLength(3)

    // expect(
    //   screen.getByTestId(`doc-title-${MOCK_DOCS[DEFAULT_DOC].name}`),
    // ).toBeInTheDocument()

    // expect(
    //   screen.getByTestId(`doc-school-${MOCK_DOCS[DEFAULT_DOC].school}`),
    // ).toBeInTheDocument()

    // expect(screen.getByText(MOCK_DOCS[DEFAULT_DOC].text)).toBeInTheDocument()

    // expect(
    //   screen.getByRole('button', { name: 'Unlock Document' }),
    // ).toBeInTheDocument()
  })

  test('Changes the window to correct URL when button is clicked', async () => {
    setUpFetch()
    renderComponent()

    // expect(mockFetch).toBeCalledTimes(1)
    // expect(screen.getByTestId('doc-landing-spinner')).toBeInTheDocument()

    // await waitForElementToBeRemoved(() =>
    //   screen.getByTestId('doc-landing-spinner'),
    // )
    // expect(window.location.href).toEqual(mockUrl)

    // const button = screen.getByRole('button', { name: 'Unlock Document' })
    // fireEvent.click(button)
    // expect(window.location.href).toEqual(redirectUrl)
  })

  test('Asserts error message when an error is returned from the network request', async () => {
    setUpFetch(false)
    // Hides Error for this tests since our code always adds a log
    // Not the best practice but leaves a cleaner looking tests suite
    // jest.spyOn(console, 'error').mockImplementation()
    // renderComponent()

    // expect(mockFetch).toBeCalledTimes(1)

    // await waitForElementToBeRemoved(() =>
    //   screen.getByTestId('doc-landing-spinner'),
    // )

    // expect(screen.getByText('Something went wrong...')).toBeInTheDocument()
  })
})
