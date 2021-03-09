import React from 'react'
import {BrowserRouter as Router, Redirect} from 'react-router-dom'

class LoginForm extends React.Component {

    state={
        input: "",
        redirect:false
    }

    handleChange= (e) =>{
        this.setState({input: e.target.value})
    }

    handleSubmit =(e)=>{
        e.preventDefault()
        this.props.logInVisitor(this.state.input)
        e.target.reset()
    }

    handleClick =()=>{
        this.setState({redirect:true})
    }

    render(){
    return (
        <Router>
        {this.state.redirect ?
          <Redirect to={"/signup"}/> 
         :
        <form onSubmit={(e)=> this.handleSubmit(e)}>
            <div className= "form-inner">
                <h1>Welcome to Dark Sky Park Locator!</h1>
                <h2>Please log in to view your account or <button onClick={this.handleClick}>Sign Up</button> here!</h2>
                <div className= "form-group">
                    <label htmlFor= "username">Username:</label>
                    <input type= "text"  name="username" id="username" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password"  />
                </div>
              
                <input type="submit" value= "LOG IN"/>
            </div>

        </form>

         
        }
        </Router>
    )
}
}
export default LoginForm
