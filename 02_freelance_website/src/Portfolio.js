import React from "react";
import Card from "./Card";

const Portfolio = ()=> (
    <section className="page-section portfolio" id="portfolio">
        <div className="container">
            {/* <!-- Portfolio Section Heading--> */}
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
            {/* <!-- Icon Divider--> */}
                <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                <div className="divider-custom-line"></div>
            </div>
            {/* <!-- Portfolio Grid Items--> */}
                <div className="row">
                {/* <!-- Portfolio Item 1--> */}
                <Card imgPath={require("./assets/img/portfolio/cabin.png")} />
                {/* <!-- Portfolio Item 2--> */}
                <Card imgPath={require("./assets/img/portfolio/cake.png")} />
                {/* <!-- Portfolio Item 3--> */}
                <Card imgPath={require("./assets/img/portfolio/circus.png")} />
                {/* <!-- Portfolio Item 4--> */}
                <Card imgPath={require("./assets/img/portfolio/game.png")} />
                {/* <!-- Portfolio Item 5--> */}
                <Card imgPath={require("./assets/img/portfolio/safe.png")} />
                {/* <!-- Portfolio Item 6--> */}
                <Card imgPath={require("./assets/img/portfolio/submarine.png")} />
            </div>
        </div>
    </section>
);

export default Portfolio;