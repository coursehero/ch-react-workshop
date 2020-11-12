import * as React from 'react'

export const Title = ({ doc }: any) => {
  return (
    <div className="title">
      <h1 className="mt-3">{doc.name}</h1>
      <h3 className="mt-2">{doc.school}</h3>
    </div>
  )
}
