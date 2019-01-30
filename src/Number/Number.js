import React, { Component } from 'react';
import './Number.css';


class Number extends Component {
    render(props) {
        return (
            <div className="number">
                <p>{this.props.digit}</p>
            </div>
        )
    }
}

// let Number = (props) => (
//     <div className="number">
//         <p>{Math.floor(Math.random() * 100) + 1}</p>
//     </div>
// );


export default Number