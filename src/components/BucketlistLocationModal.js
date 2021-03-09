import React from 'react'
import RatingForm from './RatingForm'

class BucketlistLocationModal extends React.Component {
    state ={
        show: this.props.show
    }

    handleClick = () =>{
        this.props.exitModal()
    }
    return(){
    return (
        <div className="modal">
            <div className="modal-content">
                <span class="close-btn" onClick={this.handleClick}>

                </span>
                <img className="location-modal left" 
                     src={this.props.darkSkyPark.img_url} 
                     alt={this.props.darkSkyPark.name}
                     ></img>
                <h2>{this.props.darkSkyPark.name}</h2>
                <h2>City:{this.props.darkSkyPark.city}</h2>
                <h2>State:{this.props.darkSkyPark.state}</h2>
                <h4>Rating:{""}
                    {[...Array(this.props.darkSkyPark.rating)].map((i)=>(
                        <img className="star"
                        key={i}
                        alt="star"
                        src="http://www.psdgraphics.com/wp-content/uploads/2010/11/bronze-star.jpg"
                        ></img>
                    ) )}
                </h4>
                {this.props.currentVisitor && this.props.currentVisitor.dark_sky_parks.some(
                    (darkSkyPark) => darkSkyPark.id === this.props.darkSkyPark.id
                    ) ? (
                        <RatingForm/>
                        ) :null }
                        <p>
                            <b>Description:</b> {this.props.darkSkyPark.description}
                        </p>
            </div>
        </div>
      );
    }
}

export default BucketlistLocationModal
