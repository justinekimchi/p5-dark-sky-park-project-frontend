import React, { Component } from "react";
import DarkSkyParkContainer from "./DarkSkyParkContainer";
import BucketlistLocationContainer from "./BucketlistLocationContainer";
import SearchBar from "../components/SearchBar";
import NavBar from "../components/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "../components/About";
import SignUpForm from "../components/SignUpForm";

export default class MainContainer extends Component {
    render() {
        return (
            <Router>
                <NavBar logOutVisitor={this.props.logOutVisitor} currentVisitor-={this.props.currentVisitor} />

            
                <SearchBar />

                <div className="main-container-row">
                    <div className="col-8">
                        <Route
                            exact
                            path="/dark_sky_parks"
                            render={(props) => (
                                <DarkSkyParkContainer
                                    {...props}
                                    darkSkyParks={this.props.darkSkyParks}
                                    addToList={this.props.addToList}
                                />
                            )}
                        />
                    </div>
                    <Route
                        exact
                        path="/bucketlist_locations"
                        render={(props) => (
                            <BucketlistLocationContainer
                                {...props}
                                handleDelete={this.props.handleDelete}
                                handleVisitToggle={this.props.handleVisitToggle}
                                currentVisitor={this.props.currentVisitor}
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/about"
                        render={(props) => <About {...props} />}
                    />

                    <Route
                        exact
                        path="/signup"
                        render={(props) => <SignUpForm {...props} />}
                    />

                    {/* <Route exact path='/logout' render{(props)=> <LogOut/>} */}
                    />
                </div>
            </Router>
        );
    }
}
