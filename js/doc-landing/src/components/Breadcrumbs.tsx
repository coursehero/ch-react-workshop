import * as React from 'react'

type Props = {}

export const Breadcrumbs = ({ doc }: any) => {
  return (
    <div className="breadcrumbs mt-3">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">{doc.school}</li>
          <li className="breadcrumb-item">{doc.department}</li>
          <li className="breadcrumb-item">{doc.name}</li>
        </ol>
      </nav>
    </div>
  )
}
