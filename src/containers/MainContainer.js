import React, {Component} from "react";
import DarkSkyParkContainer from './DarkSkyParkContainer'
import BucketlistLocationContainer from './BucketlistLocationContainer'
import SearchBar from '../components/SearchBar'
import NavBar from '../components/NavBar'
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from '../components/About'
import SignUpForm from '../components/SignUpForm'


export default class MainContainer extends Component {
    state ={
      darkSkyParks: [],
      selectedDarkSkyParks:[],
      search:""
 
    }
 
    
 
 componentDidMount() {
   fetch("http://localhost:3000/dark_sky_parks")
       .then((resp) => resp.json())
       .then((darkSkyParks) => this.setState({darkSkyParks}))
 }

 render(){
     return(
    <Router>
         
            
         <NavBar currentVisitor-={this.props.currentVisitor}/> 
         <button onClick={(e)=>this.props.logOutVisitor(e)}>Log Out</button>
            
                <SearchBar
                   
                />

                <div className="row">
                    <div className="col-8">
                        <Route exact path ="/dark_sky_parks" render={(props)=>(
                           <DarkSkyParkContainer {...props}
                            darkSkyParks={this.state.darkSkyParks}

                            />
                        )}
                        />
                    </div>
                    <Route exact path="/bucketlist_locations" render={(props)=>(
                         <BucketlistLocationContainer {...props} currentVisitor={this.props.currentVisitor}/>
                    )}
                       
                    />
                    <Route exact path="/about" render={(props)=>(
                        <About {...props} />
                        
                    )}
                    />

                    <Route exact path ="/signup" render={(props)=>(
                        <SignUpForm {...props}  />
                    )}
                    />
                    
                        
                    
                </div> 
         
         </Router>
     )
   
 }
}

