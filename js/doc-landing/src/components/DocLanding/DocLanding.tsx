import './DocLanding.css'

import * as React from 'react'

import { useEffect, useState } from 'react'

import { BASE_URL } from '../../constants'
import { Breadcrumbs } from '../Breadcrumbs'
import { Header } from '../Header'
import { RelatedDocs } from '../RelatedDocs'
import { Title } from '../Title'

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
              <p className="docText">{doc.text}</p>
            </div>
            <button
              className="btn btn-primary"
              onClick={() => {
                window.location.href = 'https://coursehero.com/register'
              }}
            >
              Unlock Document
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
