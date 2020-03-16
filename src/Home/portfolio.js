import React from "react"
import PortfolioCard from "./portfoliocard"

function Portfolio(props) {
    return (
        <>

            <h2>Portfolio Heading</h2>

            <div className="row">
                {
                    !!props.infoPortfolio &&

                    props.infoPortfolio.map((elem, i) => {
                        return (
                            <PortfolioCard title={elem.title} body={elem.body} url={elem.url}/>
                        )
                    })
                }
            </div>

        </>
    )

}

export default Portfolio
