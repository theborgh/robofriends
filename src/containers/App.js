import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import { setSearchField, requestRobots } from '../redux_actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
})

const mapDispatchToProps = dispatch => ({
    onSearchBoxChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()) // functions get handled by redux-thunk
})

class App extends Component {

    componentDidMount() {
        this.props.onRequestRobots();
    }

    filterList = () => {
        return this.props.robots.filter(r => r.name.toLowerCase().includes(this.props.searchField.toLowerCase()));
    }

    render() {
        if (this.props.isPending) {
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