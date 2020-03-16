import React from "react"
import WelcomeCard from "./welcomecard"

function Welcome(props) {
    return (
        <>
            <h1 className="my-4">Welcome to Modern Business</h1>
            <div className="row">
                {
                    !!props.numberCard &&

                    props.numberCard.map((elem, i) => {
                        console.log(elem);
                        return (
                            <WelcomeCard />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Welcome