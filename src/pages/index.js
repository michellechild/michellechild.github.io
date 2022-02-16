import * as React from "react"
import "../styles/styles.scss"
import logo from "../images/m_logo.svg"

// styles

// data
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
]

// markup
const IndexPage = () => {
  return (
    <div className="container">
      <img src={logo} alt="M"  className="mb-5" />
      <section className="hero">
          <h1 className="title is-1 has-text-primary"><span className="name-style px-2 has-background-primary-light">Hi! I’m Michelle.</span></h1>
          <p className="is-size-5 mb-2 is-family-sans-serif has-text-weight-bold has-text-grey">product designer | ux developer</p>
          <h2 className="subtitle is-size-3">I am currently the <span className="has-text-weight-bold">Director of Design</span> at <a className="is-link" href="https://www.crew2030.org" target="_blank">Crew2030</a>. My role is to imagine and design intuitive user experiences across our platform with a clean, reusable code structure. </h2>
          <h2 className="subtitle is-size-3 mb-3">Like writing with your favorite pen, my goal is to design tools that make your work a more joyful experience.</h2>
      </section>
    </div>
  )
}

export default IndexPage
