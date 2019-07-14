import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import { setSearchField } from '../redux_actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    searchField: state.searchField
})

const mapDispatchToProps = dispatch => ({
    onSearchBoxChange: (event) => dispatch(setSearchField(event.target.value))
})

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            
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


    filterList = () => {
        return this.state.robots.filter(r => r.name.toLowerCase().includes(this.props.searchField.toLowerCase()));
    }

    render() {
        if (this.state.robots.length === 0) {
            return <h1>Loading...</h1>;
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>Robobook</h1>
                    <SearchBox searchChange={this.props.onSearchBoxChange} />
                    <Scroll>
                        <CardList robotList={this.filterList()} />
                    </Scroll>
                </div>
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);