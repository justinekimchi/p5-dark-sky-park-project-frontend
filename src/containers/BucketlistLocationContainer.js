import React from "react";
import BucketlistLocation from "../components/BucketlistLocation";

const BucketlistLocationContainer = (props) => {
    return (
        <div className="bucketlist-location-container">
            <div className="bucketlist-title">
                <h1>My Bucketlist</h1>
            </div>

            {props.currentVisitor
                ? props.currentVisitor.dark_sky_parks.map((darkSkyPark) => (
                      <BucketlistLocation
                          handleDelete={props.handleDelete}
                          bucketlist={props.currentVisitor.bucketlist_locations.filter(
                              (location) =>
                                  location.dark_sky_park_id === darkSkyPark.id
                          )}
                          handleVisitToggle={props.handleVisitToggle}
                          darkSkyPark={darkSkyPark}
                          key={darkSkyPark.id}
                          currentVisitor={props.currentVisitor}
                      />
                  ))
                : null}
        </div>
    );
};

export default BucketlistLocationContainer;
