import React from "react"

// class Form extends React.Component {
//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.props.getWeather}>
//                     <input type="text" name="city" placeholder="City..."/>
//                     <input type="text" name="country" placeholder="Country..."/>
//                     <input type="submit"/>
//                 </form>
//             </div>
//         )
//     }
// }

const Form = props => (
    <form onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="City..."/>
        <input type="text" name="country" placeholder="Country..."/>
        <button>Get Weather</button>
    </form>
)

export default Form