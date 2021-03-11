import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(props) {
    return (
        <nav>
            <div class="top-nav">
                <div class="nav-name">
                    <h1>IDA Dark Sky Parks</h1>
                </div>
                <br />
                {/* <div class='nav-logo'>
                    <img src="https://image.pngaaa.com/322/1183322-small.png"></img>
                </div> */}
                <div class="nav-items">
                    <NavLink className="navlink" to="/dark_sky_parks" exact>
                        View All Dark Sky Parks
                    </NavLink>

                    <br />
                    <NavLink
                        className="navlink"
                        to="/bucketlist_locations"
                        exact
                    >
                        View My Saved List
                    </NavLink>
                    <br />
                    <NavLink className="navlink" to="/about" exact>
                        About Dark Sky Parks
                    </NavLink>
                    <br />
                    <div class="log-out-button">
                        <button
                            class="lg-button"
                            onClick={(e) => props.logOutVisitor(e)}
                        >
                            Log Out
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
