import "./App.css";
import React, { Component } from "react";
// import Header from './components/Header'
import MainContainer from "./containers/MainContainer";
import LoginForm from "./components/LoginForm";

class App extends Component {
    state = {
        visitors: [],
        currentVisitor: null,
        loggedIn: false,
        darkSkyParks: [],
        selectedDarkSkyParks: [],
        search: "",
    };

    componentDidMount() {
        fetch("http://localhost:3000/visitors")
            .then((resp) => resp.json())
            .then((visitors) => this.setState({ visitors }));

        fetch("http://localhost:3000/dark_sky_parks")
            .then((resp) => resp.json())
            .then((darkSkyParks) => this.setState({ darkSkyParks }));
    }

    //if a user is logged in, show the main container, else show log in page
    logInVisitor = (username) => {
        let current = this.state.visitors.find(
            (visitor) => visitor.username === username
        );
        this.setState({ currentVisitor: current, loggedIn: true });
    };
    logOutVisitor = () => {
        this.setState({
            currentVisitor: null,
        });
    };

    handleVisitToggle = (location) => {
        // let visited = this.state.currentVisitor.bucketlist_locations.find((bl)=> bl.dark_sky_park_id === location.id)

        // visited.visited = !visited.visited
        location.visited = !location.visited;

        // let updatedVisitor = {
        //   ...this.state.currentVisitor,
        //   bucketlist_locations: this.state.currentVisitor.bucketlist_locations.map((bl)=> bl.id === visited.id ? visited : bl)
        //  }
        //  console.log(updatedVisitor)

        let reqPack = {};
        reqPack.method = "PATCH";
        reqPack.headers = { "Content-Type": "application/json" };
        reqPack.body = JSON.stringify(location);

        fetch(
            `http://localhost:3000/bucketlist_locations/${location.id}`,
            reqPack
        )
            .then((res) => res.json())
            .then((currentVisitor) => this.setState({ currentVisitor }));
    };

    addToList = (park) => {
        let newListAddition = {
            dark_sky_park_id: park.id,
            visitor_id: this.state.currentVisitor.id,
            visited: false,
        };

        let reqPack = {};
        reqPack.method = "POST";
        reqPack.headers = { "Content-Type": "application/json" };
        reqPack.body = JSON.stringify(newListAddition);

        fetch(`http://localhost:3000/bucketlist_locations`, reqPack);

        let myUpdatedParks = [
            ...this.state.currentVisitor.bucketlist_locations,
            newListAddition,
        ];

        let updatedDarkSkyParks = [
            ...this.state.currentVisitor.dark_sky_parks,
            park,
        ];

        this.setState({
            currentVisitor: {
                ...this.state.currentVisitor,
                bucketlist_locations: myUpdatedParks,
                dark_sky_parks: updatedDarkSkyParks,
            },
        });
    };

    handleDelete = (location) => {
        // let visitorLocation = this.state.currentVisitor.bucketlist_locations.find(
        //     (bl) => bl.dark_sky_park_id === location.id
        // );

        fetch(`http://localhost:3000/bucketlist_locations/${location.id}`, {
            method: "DELETE",
        });

        let updatedBucketlist = this.state.currentVisitor.bucketlist_locations.filter(
            (bl) => bl.id !== location.id
        );

        let updatedDarkSkyList = this.state.currentVisitor.dark_sky_parks.filter(
            (dsp) => dsp.id !== location.dark_sky_park_id
        );
        // console.log({
        //     ...this.state.currentVisitor,
        //     bucketlist_locations: updatedBucketlist,
        // });
        this.setState({
            currentVisitor: {
                ...this.state.currentVisitor,
                bucketlist_locations: updatedBucketlist,
                dark_sky_parks: updatedDarkSkyList,
            },
        });
    };

    render() {
        return (
            <div>
                {this.state.currentVisitor ? (
                    <MainContainer
                        logOutVisitor={this.logOutVisitor}
                        handleDelete={this.handleDelete}
                        addToList={this.addToList}
                        darkSkyParks={this.state.darkSkyParks}
                        handleVisitToggle={this.handleVisitToggle}
                        currentVisitor={this.state.currentVisitor}
                        logOutVisitor={this.logOutVisitor}
                    />
                ) : (
                    <LoginForm
                        currentVisitor={this.state.currentVisitor}
                        logInVisitor={this.logInVisitor}
                    />
                )}
            </div>
        );
    }
}

export default App;
