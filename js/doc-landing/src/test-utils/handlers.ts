import { rest } from 'msw'
import { BASE_URL, DEFAULT_DOC } from '../constants'
import { MOCK_DOCS } from './mocks'

export const handlers = [
  rest.get(`${BASE_URL}/docInfo`, (req, res, ctx) => {
    const docName = req.url.searchParams.get('docName')

    if (docName !== null && MOCK_DOCS[docName] !== undefined) {
      return res(ctx.status(200), ctx.json(MOCK_DOCS[docName]))
    }

    // Return BIO 101 by default
    return res(ctx.status(200), ctx.json(MOCK_DOCS[DEFAULT_DOC]))
  }),

  // TODO
  // Add mock route for handling errors
]
