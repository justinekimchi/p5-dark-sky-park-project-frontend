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

  render() {
    return (
      <div>
        {this.state.currentVisitor ? <MainContainer currentVisitor={this.state.currentVisitor} logOutVisitor={this.logOutVisitor}/> : <LoginForm currentVisitor={this.state.currentVisitor} logInVisitor={this.logInVisitor}/>}
       
      </div>
    );
  }
}

export default App;
