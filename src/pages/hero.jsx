import React from "react"
import sample1 from "../../static/sample1.jpg"
import "../styles/hero.scss"

const Hero = () => {
  return (
    <div className="hero">
      <h1 className="hero-text">
        Welcome to my blog!
        <br />
        Enjoy lots of posts!
        <br />
      </h1>
      <div className="hero-author">
        <img src={sample1} className="hero-author-img" alt="avator" />
        <p className="hero-author-text">
          Written by xxxx
          <br />
        </p>
      </div>
    </div>
  )
}

export default Hero
