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
          <h1 className="title is-1 has-text-primary">Hi! I’m Michelle</h1>
          <p className="subtitle is-size-3">I aim to design joyful software. <span className="simile is-size-6 px-1">like writing with your favorite pen ✍🏼</span></p>
          <p className="is-size-3">I currently serve as the <span className="has-text-weight-bold">Director of Design</span> and <span className="has-text-weight-bold">Co Founder</span> of <a className="is-link" href="https://www.crew2030.org" rel="noreferrer" target="_blank">Crew2030</a>, a tech nonprofit and white label community platform for over 75 member organizations, each doing their part for a better world.</p>
          </div>
      </section>
    </Layout>
  )
}

export default IndexPage
