import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Movies from './components/Movies.jsx'
import Customers from './components/customers'
import Rentals from './components/rentals'
import NotFound from './components/notFound'
import Navbar from './components/Navbar'
import MovieForm from './components/movieForm'
import LoginForm from './components/common/loginForm'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm}></Route>
            <Route path="/movies/:id" component={MovieForm}></Route>
            <Route path="/movies" component={Movies}></Route>
            <Route path="/customers" component={Customers}></Route>
            <Route path="/rentals" component={Rentals}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect from="/" exact to="/movies"></Redirect>
            <Redirect to="/not-found"></Redirect>
          </Switch>
        </main>
      </React.Fragment>
    )
  }
}

export default App
