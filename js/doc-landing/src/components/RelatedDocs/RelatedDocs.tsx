import * as React from 'react'
import { Link } from 'react-router-dom'

import { Doc } from '../../types'
import { RELATED_DOCS_VIEWED } from '../../constants'

type Props = {
  related: Doc['related']
}

export const RelatedDocs = (props: Props) => {
  const { related } = props

  return (
    <div className="related-docs col-3">
      <h6 className="font-weight-bold">{RELATED_DOCS_VIEWED}</h6>

      <ul className="pl-0 mt-2">
        {related.length > 0 &&
          related.map((doc) => (
            <li key={doc}>
              <Link to={`/${doc}`} data-testid={`related-doc-${doc}`}>
                {doc}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  )
}
