import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import BookDetails from './components/BookDetails'

import Home from './components/Home'
import BookSearch from './components/BookSearch'

const App = () => {

  return (
      <Router>
        <div className="container mt-4">
          <Switch>
            <Route path="/:id">
              <BookDetails />
            </Route>
            <Route path="/">
              <Home>
                <BookSearch />
              </Home>
            </Route>
          </Switch>
        </div>
      </Router>
  )
}

export default App;