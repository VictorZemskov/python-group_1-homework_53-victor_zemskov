import React from 'react';
import './Number.css';


function Number(props) {
    return (
        <div className="number">
            <p>{Math.floor(Math.random() * 100) + 1}</p>
        </div>
    );
 }




export default Number