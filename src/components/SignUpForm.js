import React from 'react';

class SignUpForm extends React.Component{
   
        state={
            username:'',
            password:'',
            
        }
    
    

  //   handleUsernameChange = (e) => {
	// 	this.setState({
	// 		username: e.target.value,
	// 	});
	// }

  //   handlePasswordChange = (e) => {
	// 	this.setState({
	// 		password: e.target.value,
	// 	});
	// }

     handleSubmit=(e)=>{
        console.log("form submitted")
        e.preventDefault();
      }

      handleChange=(e)=>{
        // console.log("handle Change", e)
        this.setState({
          [e.target.name]: e.target.value
        })
      }




    render(){
        return(
            <form onSubmit={this.handleSubmit} >
            <h1>Please register with a username and password</h1>

			      <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} required/> <br></br>
			
            <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required/><br></br>




		
      {/* <Link to="/login">login</Link> */}
			<button type="submit">Create Account</button>

         </form>
        )
    }
}

export default SignUpForm