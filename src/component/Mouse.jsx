import React, { Component } from 'react'

class Mouse extends Component {
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
    return this.props.render(this.state)
  }
}

export default Mouse
