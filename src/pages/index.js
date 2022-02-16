import * as React from "react"
import "../styles/styles.scss"
import logo from "../images/m_logo.svg"

// styles
const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

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
      <img src={logo} alt="M"  className="mb-3" />
      <section className="hero block">
          <h1 className="title is-2 has-text-primary ">Hi! I’m Michelle, a web designer with 7+ years of experience. I enjoy spending my hours knee deep in CSS designing modular, clean, hopefully understandable & reusable code.</h1>
          <p className="is-family-sans-serif is-size-4 has-text-weight-semibold">I am the Director of Design at <a href="https://www.crew2030.org" className="has-text-link">Crew2030</a>, a fantastic tech nonprofit that offers a customizable online platform + community designed to amplify social movements and education programs.</p>
      </section>
    </div>
  )
}

export default IndexPage
