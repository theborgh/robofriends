import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        };
    }

    // executes after render()
    componentDidMount() {
        // fetch() is a method of the Window object
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => { this.setState({ robots: users }) });
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
        if (this.state.robots.length === 0) {
            return <h1>Loading...</h1>;
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>Robobook</h1>
                    {/* searchChange is a PROP, onSearchBoxChange is a METHOD */}
                    <SearchBox searchChange={this.onSearchBoxChange} />
                    <Scroll>
                        <CardList robotList={this.filterList()} />
                    </Scroll>
                </div>
            )
        }
    }
}

export default App;