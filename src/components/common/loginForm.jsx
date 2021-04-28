import React, { Component } from 'react'

class LoginForm extends Component {
  username = React.createRef()
  handleSubmit = (e) => {
    e.preventDefault()

    console.log(this.username.current.value)
  }

  state = {
    account: {
      username: '',
      password: '',
    },
  }

  //   componentDidMount() {
  //     this.username.current.focus()
  //   }

  handleChange = (e) => {
    let account = { ...this.state.account }
    account.username = e.currentTarget.value
    this.setState({
      account,
    })
  }

  render() {
    return (
      <div>
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              ref={this.username}
              type="text"
              className="form-control"
              autoFocus={true}
              value={this.state.account.username}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="text" className="form-control" />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    )
  }
}

export default LoginForm
