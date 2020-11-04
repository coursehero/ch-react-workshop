import "./App.css"

import * as React from "react"

import { Link, Router } from "@reach/router"

const baseUrl = "http://localhost:5000"

const Header = () => (
  <header id="ch-header" className="p-1">
    <a href={`${baseUrl}/`}>
      <img
        src={`${baseUrl}/static/images/ch_white_logo.svg`}
        className="logo"
        alt="logo"
      />
    </a>
  </header>
)

const DocLanding = (props) => {
  const [docProps, setDocProps] = React.useState([])

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await await (
          await fetch(`${baseUrl}/docInfo?doc=${props.doc}`)
        ).json()
        setDocProps(response)
      } catch (e) {
        console.log("Error", e)
      }
    }
    fetchData()
  }, [docProps.name, props])

  return (
    <div className="App">
      <Header />
      <Breadcrumbs docProps={docProps} />
      <Title docProps={docProps} />
      <RelatedDocs docProps={docProps} />

      <div className="d-flex">
        <div style={{ width: "30%" }}></div>
        <div className="shadow-lg p-3 mb-5 bg-white rounded">
          <div>{docProps.text}</div>
        </div>
        <div style={{ width: "30%" }}></div>
      </div>
    </div>
  )
}

const Breadcrumbs = ({ docProps }) => (
  <div className="breadcrumbs m-1">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">{docProps.school}</li>
        <li class="breadcrumb-item">{docProps.department}</li>
        <li className="breadcrumb-item">{docProps.name}</li>
      </ol>
    </nav>
  </div>
)

const Title = ({ docProps }) => (
  <div className="title">
    <h1 className="m-3">{docProps.name}</h1>
    <h2 className="m-3">{docProps.school}</h2>
  </div>
)

const RelatedDocs = ({ docProps }) => (
  <div className="related-docs">
    <ul>
      {docProps.related &&
        docProps.related.map((doc) => (
          <li key={doc}>
            <Link to={`/${doc}`}>{doc}</Link>
          </li>
        ))}
    </ul>
  </div>
)

function App() {
  return (
    <Router>
      <DocLanding path="/:doc" />
    </Router>
  )
}

export default App
