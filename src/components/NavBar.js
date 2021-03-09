import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar(props) {
    return (
        <nav>
        <div>
           <NavLink
                to="/dark_sky_parks"
                exact
                >View All Dark Sky Parks</NavLink> <br/>

            <NavLink
                to="/bucketlist_locations"
                exact
                >View My Saved List</NavLink> <br/>
            <NavLink
                to="/about"
                exact
                >About Dark Sky Parks</NavLink><br/>
           
        </div>
        </nav>
        
    )
}

export default NavBar
