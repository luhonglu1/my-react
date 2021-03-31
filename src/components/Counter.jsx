import React, { Component } from 'react'

class Counter extends Component {
  formatCount = () => {
    return this.props.counter.value === 0 ? 'Zero' : this.props.counter.value
  }

  getBadgeClasses = () => {
    let classes = 'badge m-2 badge-'
    classes += this.props.counter.value === 0 ? 'warning' : 'primary'
    return classes
  }

  render() {
    return (
      <div>
        <h4>Counter #{this.props.counter.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter.id)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    )
  }
}

// const Counter = ({ counter, onIncrement, onDelete }) => {
//   const formatCount = () => {
//     return counter.value === 0 ? 'Zero' : counter.value
//   }

//   const getBadgeClasses = () => {
//     let classes = 'badge m-2 badge-'
//     classes += counter.value === 0 ? 'warning' : 'primary'
//     return classes
//   }
//   return (
//     <div>
//       <h4>Counter #{counter.id}</h4>
//       <span className={getBadgeClasses()}>{formatCount()}</span>
//       <button
//         onClick={() => onIncrement(counter.id)}
//         className="btn btn-secondary btn-sm"
//       >
//         Increment
//       </button>
//       <button
//         onClick={() => onDelete(counter.id)}
//         className="btn btn-danger btn-sm m-2"
//       >
//         Delete
//       </button>
//     </div>
//   )
// }

export default Counter
