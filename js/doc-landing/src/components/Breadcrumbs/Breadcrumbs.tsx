import * as React from 'react'

import { Breadcrumbs as BreadcrumbsType } from '../../types'

type Props = {
  items: BreadcrumbsType
}

// Generic Breacrumbs component
export const Breadcrumbs = (props: Props) => {
  const { items } = props

  return (
    <div className="breadcrumbs mt-3">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          {items.map((item, index) => (
            <li key={`${item}-${index}`} className="breadcrumb-item">
              {item}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  )
}
