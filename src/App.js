import React, { Component } from 'react';
import * as firebase from 'firebase';
import {ChromePicker} from 'react-color';
import './App.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            color: '#fff',
            count: 0
        };
        
        this.handleChange = this.handleChange.bind(this);

        // references to the nodes on the database we'd like to observe
        this.colorRef = firebase.database().ref('hex_color');
        this.countRef = firebase.database().ref('count');
    }

    // lifecycle function
    // great for attaching observers
    componentDidMount() {

        // attach listener to the count reference on the database
        // snapshot is the data at the specified node at the time the node changes
        this.countRef.on('value', snapshot => {
           this.setState({
               // set state.count to be the value of the snapshot
               // will cause the render function to be called
               count: snapshot.val(),
           });
        });
    }

    // handle new color from ChromePicker
    handleChange = (color) => {

        // set the hex value of the color at the specified node
        this.colorRef.set(color.hex);

        // set state to update the color, necessary for ChromePicker
        this.setState({
            color: color.hex
        });
    };

    render() {
        return (
            <div className="App">
                <div>COUNT: { this.state.count } </div>
                <ChromePicker color={ this.state.color } onChange={ this.handleChange } />
            </div>
        );
    }
}

export default App;
