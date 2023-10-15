import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postAdded } from './postsSlice'

export const AddPostsForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [userId, setUserId] = useState('')

  const dispatch = useDispatch()
  const users = useSelector((state) => state.users)

  const onTitleChanged = (e) => setTitle(e.target.value)
  const onContentChanged = (e) => setContent(e.target.value)
  const onAuthorChanged = (e) => setUserId(Number(e.target.value))

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

  const onSavePostClicked = () => {
    if (title && content) {
      console.log('userId', userId)
      console.log(userId === 0 && 'true')
      dispatch(postAdded(title, content, userId))
      setTitle('')
      setContent('')
    }
  }

  const usersOptions = users.map((user, key) => {
    return (
      <option key={key} value={user.id}>
        {user.name}
      </option>
    )
  })

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="ostAuthor">Author</label>
        <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {usersOptions}
        </select>
        <label htmlFor="postContent">Content</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  )
}
