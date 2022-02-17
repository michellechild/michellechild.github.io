import React from "react"
import Footer from './footer.js'

export default function Layout({ children }) {
  return (
    <div>
      <div class="content">
      {children}
      </div>
    </div>
  )
}
