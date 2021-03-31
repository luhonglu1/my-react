// import React, { Component } from 'react'
// class Navbar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a href="/#" className="navbar-brand">
//           NavBar{' '}
//           <span className="badge badge-pill badge-secondary">
//             {this.props.totalCounters}
//           </span>
//         </a>
//       </nav>
//     )
//   }
// }

const Navbar = ({ totalCounters }) => {
  console.log('Navbar - Render')

  return (
    <nav className="navbar navbar-light bg-light">
      <a href="/#" className="navbar-brand">
        NavBar{' '}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  )
}

export default Navbar
