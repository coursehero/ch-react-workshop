import * as React from 'react'
import { Link } from '@reach/router'

type Props = {}

export const RelatedDocs = ({ doc }: any) => {
  return (
    <div className="related-docs col-3">
      <h6 className="font-weight-bold">
        Students who viewed this also studied
      </h6>

      <ul className="pl-0 mt-2">
        {doc.related &&
          doc.related.map((doc: any) => (
            <li key={doc}>
              <Link to={`/${doc}`}>{doc}</Link>
            </li>
          ))}
      </ul>
    </div>
  )
}
