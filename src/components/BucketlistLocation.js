import React from "react";
// import BucketlistLocationModal from './BucketlistLocationModal'

class BucketlistLocation extends React.Component {
    state = {
        isChecked: this.props.bucketlist[0].visited,
    };

    render() {
        return (
            <div>
                <div className="card" id={this.props.darkSkyPark.id}>
                    <h3>{this.props.darkSkyPark.name}</h3>
                    <img
                        className="location"
                        style={{ width: "500px" }}
                        src={this.props.darkSkyPark.img_url}
                        alt={this.props.darkSkyPark.name}
                        // onClick={()=>this.setState({modal:true})}
                    ></img>
                    <h4>
                        {this.props.darkSkyPark.city},
                        {this.props.darkSkyPark.state}
                    </h4>
                </div>
                <div class="check-box">
                    <label>
                        <input
                            type="checkbox"
                            checked={this.state.isChecked}
                            onChange={() => {
                                this.setState({
                                    isChecked: !this.state.isChecked,
                                });
                                this.props.handleVisitToggle(
                                    this.props.bucketlist[0]
                                );
                            }}
                        />
                        Visited
                    </label>
                </div>
                <button
                    onClick={() =>
                        this.props.handleDelete(this.props.bucketlist[0])
                    }
                >
                    Remove From My List
                </button>
            </div>
        );
    }
}

export default BucketlistLocation;
