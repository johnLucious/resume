import React, { Component} from 'react'

// class Welcome extends Component {
//     render() {
//         return <h2> Class </h2>
//     }
// }

function Welcome(props){
    return <h1>Hello {props.name} your age is {props.age}</h1>
}
export default Welcome;