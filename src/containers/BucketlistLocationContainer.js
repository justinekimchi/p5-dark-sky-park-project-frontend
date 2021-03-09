import React from 'react'
import BucketlistLocation from '../components/BucketlistLocation'

const BucketlistLocationContainer=(props) =>{
    return (
        <div className="bucketlist-location-container">
            {props.currentVisitor ? props.currentVisitor.dark_sky_parks.map(darkSkyPark => 
            <BucketlistLocation darkSkyPark={darkSkyPark} key={darkSkyPark.id}/>) 
            : null 
            }
         
        </div>
    )
}

export default BucketlistLocationContainer
