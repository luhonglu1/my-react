import React, { Component } from 'react'
import Movies from './components/Movies.jsx'
// import Counters from './components/Counters.jsx'
// import Navbar from './components/Navbar.jsx'
// class App extends Component {
//   state = {
//     counters: [
//       {
//         id: 1,
//         value: 4,
//       },
//       {
//         id: 2,
//         value: 0,
//       },
//       {
//         id: 3,
//         value: 0,
//       },
//       {
//         id: 4,
//         value: 0,
//       },
//     ],
//   }

//   constructor(props) {
//     super(props)
//     console.log('App - Counstructor')
//   }

//   componentDidMount() {
//     console.log('App - Mount')
//   }

//   handleReset = () => {
//     const counters = this.state.counters.map((c) => {
//       c.value = 0
//       return c
//     })
//     this.setState({ counters })
//   }

//   handleDel = (counterId) => {
//     console.log('Event Handler Called', counterId)
//     const counters = this.state.counters.filter((c) => c.id !== counterId)
//     this.setState({
//       counters,
//     })
//   }

//   handleIncrement = (counterId) => {
//     console.log(counterId, 'counterIdcounterId')
//     const counters = [...this.state.counters]
//     const index = counters.findIndex((c) => c.id === counterId)
//     counters[index].value++
//     this.setState({
//       counters,
//     })
//   }
//   render() {
//     console.log('App - Render')
//     return (
//       <React.Fragment>
//         <Navbar
//           totalCounters={this.state.counters.filter((c) => c.value > 0).length}
//         ></Navbar>
//         <main className="container">
//           <Counters
//             counters={this.state.counters}
//             onReset={this.handleReset}
//             onDelete={this.handleDel}
//             onIncrement={this.handleIncrement}
//           ></Counters>
//         </main>
//       </React.Fragment>
//     )
//   }
// }

class App extends Component {
  render() {
    return <Movies></Movies>
  }
}

export default App
