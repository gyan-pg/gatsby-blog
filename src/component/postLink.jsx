import React from "react"
import "../styles/postLink.scss"

const RANDOM_ING = "https://source.unsplash.com/random/640x360"

const PostLink = () => {
  return (
    <div className="post-link">
      <div>
        <img src={RANDOM_ING} className="post-link-img" alt="post-img" />
      </div>
      <div className="post-link-text">
        <h2>Gatsbyでブログ作成</h2>
        <p className="post-link-body">
          サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト
        </p>
        <p className="post-link-date">2022/**/**</p>
      </div>
    </div>
  )
}

export default PostLink
