import * as React from 'react'
import { useState, useEffect } from 'react'

import { BASE_URL } from '../constants'

import { Header } from './Header'
import { Breadcrumbs } from './Breadcrumbs'
import { Title } from './Title'
import { RelatedDocs } from './RelatedDocs'

export const DocLanding = (props: any) => {
  const { docName } = props
  const [doc, setdoc] = useState<any>([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await (
          await fetch(`${BASE_URL}/docInfo?docName=${docName}`)
        ).json()

        setdoc(response)
      } catch (e) {
        console.log('Error', e)
      }
    }

    fetchData()
  }, [docName])

  return (
    <div className="App">
      <Header />

      <div className="container">
        <Breadcrumbs doc={doc} />

        <Title doc={doc} />

        <div className="row mt-5">
          <RelatedDocs doc={doc} />

          <div className="col-9">
            <div className="shadow-lg p-3 mb-5 bg-white rounded">
              <div>{doc.text}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
