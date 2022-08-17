import React from "react"
import Layout from "../component/layout"
import PostLink from "../component/postLink"
import Hero from "./hero"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <PostLink />
      <PostLink />
    </Layout>
  )
}
