import React, {Component} from 'react'
import DarkSkyPark from '../components/DarkSkyPark'

class DarkSkyParkContainer extends Component {
    render(){
      return (
        <div className="dark-sky-park-container">
            <h2>Dark Sky Parks</h2>
            {
                 this.props.darkSkyParks.map((darkSkyPark)=>(
                  <DarkSkyPark 
                      key={darkSkyPark.id} 
                      darkSkyPark={darkSkyPark}
                      />
                  ))}
        </div>
    )
}
}

export default DarkSkyParkContainer
