import React from 'react';
import './Card.css';

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">{ this.props.header }</div>
                <div className="card-body">{ this.props.body }  &#176;</div>
            </div>
        );
    } 
}

export default Card;