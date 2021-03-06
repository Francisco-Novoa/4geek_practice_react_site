import React from "react"

function PorfolioCard(props) {
    return (
        <div className="col-lg-4 col-sm-6 portfolio-item">
        <div className="card h-100">

            <a href="/#"><img className="card-img-top" src={props.url} alt="" /></a>

            <div className="card-body">

                <h4 className="card-title">

    <a href="#">{props.title}</a>

                </h4>

    <p className="card-text">{props.body}</p>

            </div>

        </div>
        </div>
    )
}

export default PorfolioCard

