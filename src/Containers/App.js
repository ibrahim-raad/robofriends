import React, {useState , useEffect} from "react";
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundry from "../Components/ErrorBoundry";
import './App.css';


function App () {
  
    const [Robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');

    

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(users =>  setRobots(users))
        
    },[])

      const  onSearchChange =(event) => {
            setSearchfield( event.target.value )
        }
        const filteredRobots = Robots.filter(Robot => {
            return Robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
    return !Robots.length ?
        <h1 className="tc ">Loading...</h1> :
    
        (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList Robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
                
            </div>
        
        );
}


export default App;