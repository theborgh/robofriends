import React, {Component} from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchField: ''
        };
    }

    // this is an arbitrary method name to handle a SearchBox event
    // Using this syntax with arrow functions because it uses the THIS keyword that refers to App, not 
    // the current object where the event originated (which would happen with the normal syntax)
    onSearchBoxChange = e => {
        
        // ALWAYS use the setState() method to update the state, 
        // do not assign it directly with this.state.saerchfield = ...
        this.setState({searchField: e.target.value});
    }
    
    render() {
        const filteredList = this.state.robots.filter(r => r.name.toLowerCase().includes(this.state.searchField.toLowerCase()))
        return (
            <div className='tc'>
                <h1>Robofriends</h1>
                {/* searchChange is a PROP, onSearchBoxChange is a METHOD */}
                <SearchBox searchChange={this.onSearchBoxChange} />
                <CardList robotList={filteredList} />
            </div>
        )
    }
}

export default App;