import { rest } from 'msw'
import { DEFAULT_DOC, BASE_URL } from '../constants'
import { MOCK_DOCS } from './mocks'

export const handlers = [
  rest.get(`${BASE_URL}/doc-info`, (req, res, ctx) => {
    const docName = req.url.searchParams.get('docName')

    if (docName !== null && MOCK_DOCS[docName] !== undefined) {
      return res(ctx.status(200), ctx.json(MOCK_DOCS[docName]))
    }

    return res(ctx.status(200), ctx.json(MOCK_DOCS[DEFAULT_DOC]))
  }),
]
