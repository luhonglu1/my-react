import React, { Component } from 'react'
import Counter from './Counter'

class Counters extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onReset} className="btn primary btn-sm m-2">
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            key={counter.id}
            counter={counter}
          ></Counter>
        ))}
      </div>
    )
  }
}

export default Counters
