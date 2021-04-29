import Joi from 'joi-browser'
import Form from './common/form'

class RegisterForm extends Form {
  state = {
    data: {
      username: '',
      password: '',
      name: '',
    },
    errors: {},
  }

  schema = {
    username: Joi.string().email({ minDomainSegments: 2 }),
    password: Joi.string().length(5),
    name: Joi.string().required(),
  }

  render() {
    return (
      <div>
        <h1>RegisterForm</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('username', 'Username')}
          {this.renderInput('password', 'Password')}
          {this.renderInput('name', 'Name')}
          {this.renderBtn('Register')}
        </form>
      </div>
    )
  }
}

export default RegisterForm
