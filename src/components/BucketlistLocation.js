import React from 'react'
// import BucketlistLocationModal from './BucketlistLocationModal'

class BucketlistLocation extends React.Component {
    
    // exitModal =() =>{
    //     this.setState({modal:false}, () => {
    //         // console.log(this.state, "state updated")
    //     }
    //         )
    // }


   
    

    render(){
    return (
        <div>

            <div className="card" id={this.props.darkSkyPark.id}>
                <h3>{this.props.darkSkyPark.name}</h3>
           <img
                        className="location"
                        style={{width:'500px'}}
                        src={this.props.darkSkyPark.img_url}
                        alt={this.props.darkSkyPark.name}
                        // onClick={()=>this.setState({modal:true})}
                        >
                        </img>
            </div>
            <div class="check-box">
                <label>
                <input type="checkbox" checked={this.props.bucketlist[0].visited} onChange={()=>this.props.handleVisitToggle(this.props.bucketlist[0])}/>Visited
                </label>
                
            </div>
            <button onClick={()=>this.props.handleDelete(this.props.darkSkyPark)}>Remove From My List</button>
            {/* {this.state.modal ? (
                <div>
                    <BucketlistLocationModal
                        darkSkyPark={this.props.darkSkyPark}
                        exitModal={this.exitModal}
                        currentVisitor={this.props.currentVisitor}
                    />
                </div>
            ) :null } */}
        </div>
     )
    }
}

export default BucketlistLocation
