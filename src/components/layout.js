import React from "react"

export default function Layout({ children }) {
  return (
    <div>
      <div class="content">
      {children}
      </div>
    </div>
  )
}
