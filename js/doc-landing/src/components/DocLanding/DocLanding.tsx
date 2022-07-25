import * as React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Doc, Status, RouterParams } from '../../types'
import { BASE_URL } from '../../constants'

import { Header } from '../Header'
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs'
import { Title } from '../Title'
import { RelatedDocs } from '../RelatedDocs/RelatedDocs'
import { ErrorMessage } from '../ErrorMessage'

import './DocLanding.css'

export const DocLanding = () => {
  const { docName } = useParams<RouterParams>()
  const [status, setStatus] = useState(Status.Loading)
  const [doc, setDoc] = useState(getInitialState)

  useEffect(() => {
    async function fetchData() {
      try {
        console.log(`${BASE_URL}/doc-info?docName=${docName}`)
        const response = await (
          await fetch(`${BASE_URL}/doc-info?docName=${docName}`)
        ).json()

        setStatus(Status.Success)
        setDoc(response)
      } catch (e) {
        console.error('Request error:', e)
        setStatus(Status.Error)
      }
    }

    fetchData()
  }, [docName])

  switch (status) {
    case Status.Loading:
      return (
        <>
          <Header />

          <div className="d-flex mt-5" data-testid="doc-landing-spinner">
            <div className="ml-auto mr-auto h6">Loading...</div>
          </div>
        </>
      )

    case Status.Success: {
      const { name, school, department, text, related } = doc
      const breadcrumbs = [school, department, name]

      return (
        <div>
          <Header />

          <div className="container">
            <Breadcrumbs items={breadcrumbs} />

            <Title name={name} school={school} />

            <div className="row mt-5">
              <RelatedDocs related={related} />

              <div className="col-9">
                <div className="shadow-lg p-3 mb-5 bg-white rounded">
                  <p className="doc-text">{text}</p>
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

    case Status.Error:
      return <ErrorMessage />

    default:
      throw new Error(`Unhandled status: ${status}`)
  }
}

// Sets the initial state for the document
const getInitialState = (): Doc => ({
  id: 0,
  name: '',
  school: '',
  department: '',
  text: '',
  related: [],
})
