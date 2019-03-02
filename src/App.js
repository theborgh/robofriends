import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchField: ''
        };
    }

    // This is an arbitrary method name to handle a SearchBox event
    // It uses the arrow function syntax so that the THIS keyword will reference App instead of 
    // the object where the event originated (which would happen with the normal syntax)
    onSearchBoxChange = e => {

        // ALWAYS use the setState() method to update the state, 
        // do not assign it directly with this.state.saerchfield = ...
        this.setState({ searchField: e.target.value });
    }

    filterList = () => {
        return this.state.robots.filter(r => r.name.toLowerCase().includes(this.state.searchField.toLowerCase()));
    }

    render() {
        return (
            <div className='tc'>
                <h1 className='f1'>Robobook</h1>
                {/* searchChange is a PROP, onSearchBoxChange is a METHOD */}
                <SearchBox searchChange={this.onSearchBoxChange} />
                <CardList robotList={this.filterList()} />
            </div>
        )
    }
}

export default App;