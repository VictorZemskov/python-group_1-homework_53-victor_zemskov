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




export { Number };

