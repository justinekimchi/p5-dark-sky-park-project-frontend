import React from "react";

class DarkSkyPark extends React.Component {
    render() {
        return (
            <div class="dark-sky-park-comp">
                <div className="card">
                    <div className="card-body">
                        <div>
                            <div className="card-title">
                                <h3>{this.props.darkSkyPark.name}</h3>
                            </div>
                            <img
                                style={{ width: "800px" }}
                                src={this.props.darkSkyPark.img_url}
                                alt={this.props.darkSkyPark.name}
                            />
                        </div>
                        <div>
                            <p>
                                <h4>
                                    {this.props.darkSkyPark.city},
                                    {this.props.darkSkyPark.state}
                                </h4>
                            </p>

                            <p>{this.props.darkSkyPark.description}</p>
                        </div>
                    </div>
                    <button
                        onClick={() =>
                            this.props.addToList(this.props.darkSkyPark)
                        }
                    >
                        Add Park to My List
                    </button>
                </div>
            </div>
        );
    }
}

export default DarkSkyPark;
