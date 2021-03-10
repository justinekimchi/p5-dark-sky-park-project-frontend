import './App.css';
import React, {Component} from 'react'
// import Header from './components/Header'
import MainContainer from './containers/MainContainer'
import LoginForm from './components/LoginForm'

class App extends Component {

  state={
    visitors:[],
    currentVisitor: null,
    loggedIn:false
  }

  componentDidMount(){
    fetch("http://localhost:3000/visitors")
     .then((resp) => resp.json())
     .then((visitors) => this.setState({visitors}))
  }

  //if a user is logged in, show the main container, else show log in page
  logInVisitor = (username) => {
    let current = this.state.visitors.find(
        (visitor) => visitor.username === username
    );
    this.setState({ currentVisitor: current, loggedIn:true });
};
   logOutVisitor = () =>{
     this.setState({
       currentVisitor:null,
     })
   }

   handleVisitToggle=(location)=>{
    // let visited = this.state.currentVisitor.bucketlist_locations.find((bl)=> bl.dark_sky_park_id === location.id)
    
    // visited.visited = !visited.visited
    location.visited = !location.visited

    // let updatedVisitor = {
    //   ...this.state.currentVisitor,
    //   bucketlist_locations: this.state.currentVisitor.bucketlist_locations.map((bl)=> bl.id === visited.id ? visited : bl)
    //  }
    //  console.log(updatedVisitor)

    let reqPack={}
    reqPack.method ="PATCH"
    reqPack.headers={ "Content-Type": "application/json" };
    reqPack.body = JSON.stringify(location)

    fetch(`http://localhost:3000/bucketlist_locations/${location.id}`, reqPack)
     .then(res=>res.json())
     .then(currentVisitor=>this.setState({currentVisitor}))

 }

  render() {
    return (
      <div>
        {this.state.currentVisitor ? 
        <MainContainer 
        handleVisitToggle={this.handleVisitToggle} 
        currentVisitor={this.state.currentVisitor} 
        logOutVisitor={this.logOutVisitor}/> 
        : <LoginForm 
        currentVisitor={this.state.currentVisitor} 
        logInVisitor={this.logInVisitor}/>}
       
      </div>
    );
  }
}

export default App;
