import React from 'react'

// input liked: boolean
// output: onclick

// class Like extends Component {
//   render() {
//     let classes = 'fa fa-heart'
//     if (!this.props.liked) {
//       classes += '-o'
//     }
//     return (
//       <i
//         onClick={this.props.onClick}
//         style={{ cursor: 'pointer' }}
//         class={classes}
//         aria-hidden="true"
//       ></i>
//     )
//   }
// }

// export default Like

const Like = (props) => {
  let classes = 'clickable fa fa-heart'
  if (!props.liked) {
    classes += '-o'
  }
  return <i onClick={props.onClick} className={classes} aria-hidden="true"></i>
}

export default Like
