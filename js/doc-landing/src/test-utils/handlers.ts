import { rest } from 'msw'
import mockData from '../docs.json'

export const handlers = [
  rest.get('http://127.0.0.1:5000/docInfo', (req, res, ctx) => {
    const data = mockData as any
    const docName = req.url.searchParams.get('docName')

    if (docName !== null && data[docName] !== undefined) {
      return res(ctx.status(200), ctx.json(data[docName]))
    }

    // Return BIO 101 by default
    return res(ctx.status(200), ctx.json(data['BIO 101']))
  }),
]
