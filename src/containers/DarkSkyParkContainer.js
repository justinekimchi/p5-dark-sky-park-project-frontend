import React, { Component } from "react";
import DarkSkyPark from "../components/DarkSkyPark";

class DarkSkyParkContainer extends Component {
    render() {
        return (
            <div className="dark-sky-park-container">
                <div class='dark-sky-park-title'>
                    <h1>Dark Sky Parks</h1>
                </div>
                {this.props.darkSkyParks.map((darkSkyPark) => (
                    <DarkSkyPark
                        addToList={this.props.addToList}
                        key={darkSkyPark.id}
                        darkSkyPark={darkSkyPark}
                    />
                ))}
            </div>
        );
    }
}

export default DarkSkyParkContainer;
