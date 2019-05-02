import React from "react"



// class Weather extends React.Component {
//     render() {
//         return (
//             <div>
//                 { this.props.city && this.props.country && <h1> {this.props.city}, {this.props.country} </h1> }
//                 { this.props.temperature && <h1> {this.props.temperature} ℃ </h1>}
//                 { this.props.error && <h1> {this.props.error} </h1>}
//             </div>
//         )
//     }
// }

// const Weather = (props) => {
//     return (
//         <div>
//             { props.city && props.country && <h1> {props.city}, {props.country} </h1> }
//             { props.temperature && <h1> {props.temperature} ℃ </h1>}
//             { props.error && <h1> {props.error} </h1>}
//         </div>
//     )
// }

const Weather = props => (
        <div className="weather__info">
            { 
                props.city && props.country && 
                <p className="weather__key">
                    <span>{props.city}, {props.country}</span>
                </p>
            }

            { 
                props.temperature && 
                <p className="weather__key">
                    <span>{props.temperature} ℃</span>
                </p>
            }

            { 
                props.error && 
                <p className="weather__key">
                    <span>{props.error}</span>
                </p>
            }
        </div>
)
 
export default Weather