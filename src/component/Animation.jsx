import { useSpring, animated } from 'react-spring'
// import { Spring } from 'react-spring'

// const Animation = () => {
//   return (
//     <Spring
//       config={{ duration: 3000 }}
//       from={{ opacity: 0 }}
//       to={{ opacity: 1 }}
//     >
//       {(props) => {
//         console.log(props)
//         return <div style={props}>hello</div>
//       }}
//     </Spring>
//   )
// }

const Animation = () => {
  const props = useSpring({
    config: { duration: 3000 },
    to: { opacity: 1 },
    from: { opacity: 0 },
  })
  return <animated.div style={props}> I Will Fade In</animated.div>
}

export default Animation
