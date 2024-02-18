import React, {Component} from "react";
import { connect } from "react-redux";
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundry from "../Components/ErrorBoundry";
import './App.css';
import { requestRobots, setSearchField } from "../actions";
import Header from "../Components/Header";


const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        Robots: state.requestRobots.Robots,
        isPending: state.requestRobots.isPending ,
        error: state.requestRobots.error
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {
    
    componentDidMount(){
        this.props.onRequestRobots()
    }
       
    render() {
        const { searchField , onSearchChange, Robots, isPending} = this.props;
        const filteredRobots = Robots.filter(Robot => {
            return Robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return isPending ?
           <h1 className="tc ">Loading...</h1> :
        
            (
                <div className="tc">
                    <Header />
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList Robots={filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                    
                </div>
            );
                 
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);