import React from "react"
import "../styles/footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
      &copy;{new Date().getFullYear()} Sample Blog
    </footer>
  )
}

export default Footer
