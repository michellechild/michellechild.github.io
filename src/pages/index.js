import * as React from "react"
import Layout from '../components/layout.js'
import "../styles/styles.scss"
import logo from "../images/m_logo.svg"

// styles

// markup
const IndexPage = () => {
  return (
    <Layout>
      <section>
        <div className="container">
          <img src={logo} alt="M"  className="mb-3" />
          <h1 className="title is-1 has-text-primary"><span className="name-style px-2 has-background-primary-light">Hi! I’m Michelle.</span></h1>
          <p className="is-size-5 mb-2 is-family-sans-serif has-text-weight-semibold has-text-grey-light">product designer | developer</p>
          <h2 className="is-size-3">I aim to design tools that make your work a more joyful experience. <span className="is-size-6 px-1 has-text-weight-semibold has-text-info">(like writing with your favorite pen)</span></h2>
          <h2 className="is-size-3">I'm currently the <span className="has-text-weight-bold">Director of Design</span> at <a className="is-link" href="https://www.crew2030.org" rel="noreferrer" target="_blank">Crew2030</a>. My role is to imagine and design intuitive user experiences across the Crew Platform with a clean, reusable code structure.</h2>
          </div>
      </section>
    </Layout>
  )
}

export default IndexPage
