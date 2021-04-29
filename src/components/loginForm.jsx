import React from 'react'
import Joi from 'joi-browser'
import Form from './common/form'

class LoginForm extends Form {
  username = React.createRef()

  state = {
    data: {
      username: '',
      password: '',
    },
    errors: {},
  }

  schema = {
    username: Joi.string().required(),
    password: Joi.string().required(),
  }

  //   componentDidMount() {
  //     this.username.current.focus()
  //   }

  doSubmit = () => {
    // call the server
  }

  render() {
    return (
      <div>
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('username', 'Username')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderBtn('Login')}
        </form>
      </div>
    )
  }
}

export default LoginForm
