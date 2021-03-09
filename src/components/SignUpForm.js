import React from 'react';

class SignUpForm extends React.Component{
   
        state={
            username:'',
            password:'',
            
        }
    
    

    handleUsernameChange = (e) => {
		this.setState({
			username: e.target.value,
		});
	}

    handlePasswordChange = (e) => {
		this.setState({
			password: e.target.value,
		});
	}

     handleSubmit=(e)=>{
        console.log("form submitted")
        e.preventDefault();
      }

      handleChange=(e)=>{
        console.log("handle Change", e)
      }


    render(){
        return(
            <form onSubmit={this.handleSubmit} >
			<input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} required/>
			
            <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required/>




		
      {/* <Link to="/login">login</Link> */}
			<button type="submit">Create Account</button>

         </form>
        )
    }
}

export default SignUpForm