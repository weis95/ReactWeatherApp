import React from 'react';
import './Page.css';

class Page extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="innerContainer">{ this.props.children }</div>
            </div>
        ) 
    } 
}

export default Page;
