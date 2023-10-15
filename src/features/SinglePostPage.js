import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export const SinglePostPage = ({ match, location }) => {
  const { postId } = match.params
  console.log('match', match)
  console.log('location', location)

  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  )

  if (!post) {
    return (
      <section>
        <h2>post none!</h2>
      </section>
    )
  } else {
    return (
      <section>
        <artcile className="post">
          <h2>{post.title}</h2>
          <p className="post-content">{post.content}</p>
          <Link to={`/editPost/${post.id}`} className="button">
            Edit post
          </Link>
        </artcile>
      </section>
    )
  }
}
