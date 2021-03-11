import React from "react";
// import ImageGallery from "react-image-gallery";
// import "~react-image-gallery/styles/css/image-gallery.css";

function About() {
    return (
        <div className="about-section">
            <center>
                <h1>A Quick Overview on Dark Sky Parks </h1>
            </center>
            <br />

            <center>
                <img
                    height="896px"
                    width="1332px"
                    // src="https://www.gannett-cdn.com/-mm-/a5076e7a43a0cec6129489319d0fb728e2cd1814/c=0-264-5184-3193/local/-/media/2017/08/18/USATODAY/USATODAY/636386734183515467-Mount-Rainier-National-Park-Evan-Eremita-STE.jpg?width=3200&height=1680&fit=crop"
                    src="http://hdqwalls.com/download/1/cloud-landscape-milky-way-nature-night-panorama-sky-starry-sky-stars-17.jpg"
                    alt={"dark-sky-park"}
                ></img>
            </center>

            <div className="about-description">
                It’s never been easier than ever to view the galaxy from earth.
                With little to no light pollution, the views from certified IDA
                Dark Sky Parks are spectacular, magical, and breath-taking. Most
                of these magnificent parks’ lands are reserved and open only at
                night when the sun goes down and the night takes over to give us
                a glimpse of the mystical stars that surround us. Residents in
                these areas maintain and uphold their local park certifications
                by limiting their usage of lights and energy to preserve the
                natural night skies. Support these local areas and parks by
                camping out with your family and friends year round.
            </div>
        </div>
    );
}

export default About;
