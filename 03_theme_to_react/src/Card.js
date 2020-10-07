import React from "react";

const Card = ({ imgUrl, title = "Card title", subTitle = "sub title", buttonText ="Go somewhere"} )=> {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img
                src= {imgUrl}
                className="card-img-top"
                alt="img-description" />
            <div className="card-body">
                <h5 className="card-title"> {title} </h5>
                <p className="card-text">
                    {subTitle}
                </p>
                <a href="#" className="btn btn-success"> {buttonText} </a>
            </div>
        </div>
    );
}

export default Card;