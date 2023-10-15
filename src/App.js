import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from 'react-router-dom'

import { PostsList } from './features/PostsList'
import { AddPostsForm } from './features/AddPostsForm'
import { SinglePostPage } from './features/SinglePostPage'
import { EditPostForm } from './features/EditPostForm'
import { Navbar } from './app/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <AddPostsForm />
                <PostsList />
              </React.Fragment>
            )}
          />
          <Route exact path="/posts/:postId" component={SinglePostPage} />
          <Route exact path="/editPost/:postId" component={EditPostForm} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
