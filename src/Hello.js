import React, { Component } from 'react';
import './Hello.css';

class Hello extends Component {
    render() {
        return (
            <div className='f1 tc'>
                <h1>Hello, what's up?</h1>
                <p>This is a test. The greeting is: {this.props.greeting}</p>
            </div>
        );
    }
}

export default Hello;