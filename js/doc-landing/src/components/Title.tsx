import * as React from 'react'

import { Doc } from '../types'

type Props = {
  name: Doc['name']
  school: Doc['school']
}

export const Title = (props: Props) => {
  const { name, school } = props

  return (
    <div className="title">
      <h1 className="mt-3" data-testid={`doc-title-${name}`}>
        {name}
      </h1>
      <h3 className="mt-2" data-testid={`doc-school-${school}`}>
        {school}
      </h3>
    </div>
  )
}
