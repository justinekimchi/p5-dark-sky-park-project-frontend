import React from 'react'

class DarkSkyPark extends React.Component {
    render(){
        return(
    
    <div>
        <div className="card">
            <div className="card-body">
                <h3 className="card-title">{this.props.darkSkyPark.name}</h3>
                <img style={{width:'500px'}} src={this.props.darkSkyPark.img_url} alt={this.props.darkSkyPark.name}/>

            </div>
        </div>
            
    </div>
        )
    }
}

export default DarkSkyPark
