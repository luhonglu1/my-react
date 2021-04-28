import { Component } from 'react'

export const withMouse = (WrappedComponent) => {
  class HOC extends Component {
    state = { x: 0, y: 0 }

    componentDidMount() {
      window.addEventListener('mousemove', this.handleMouseMove)
    }

    componentWillUnmount() {
      window.removeEventListener('mousemove', this.handleMouseMove)
    }

    handleMouseMove = (e) => {
      this.setState({
        x: e.clientX,
        y: e.clientY,
      })
    }

    render() {
      return (
        <WrappedComponent {...this.state} {...this.props}></WrappedComponent>
      )
    }
  }
  return HOC
}
