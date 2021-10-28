import React, { Component } from 'react';
import { Afcomponent } from './Afcomponent';

class Ccomponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             visibility: false
        }
        this.handleClick = this.handleClick.bind(this)
    }


    handleClick(){
        this.setState(state => {
            visibility: !state.visibility
        })
    }


    
    render() {
        
        return (
            <div>
                <h1>Classs component {this.state.name}</h1>
                <button onClick={this.handleClick}>Click</button>
            </div>
        );
    }
}

export default Ccomponent;