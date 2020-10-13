import React from 'react';
import './TextInput.css';

class TextInput extends React.Component {
    render() {
        return (
            <div className="container">
                <input 
                    type="text" 
                    placeholder={this.props.placeholder}
                    ref={this.props.ref}
                    value={this.props.value}
                    onChange={this.props.onChange}
                />
            </div>
        );
    } 
}

export default TextInput;
