

import React, { useState } from 'react';
import Navbar from "../navbar";
import Header from "../header"
import Welcome from "./welcome"
import Portfolio from "./portfolio"
import Footer from "./footer"
import Action from "./actions"

const Home = props => {
    const [state, setState] = useState({
        galery: [
            { id: 1, url: "https://picsum.photos/1900/1080?grayscale", title: "First Title", description: "This is the description of the First slide" },
            { id: 2, url: "https://picsum.photos/1900/1080?grayscale", title: "Second Title", description: "This is the description of the Second slide" },
            { id: 3, url: "https://picsum.photos/1900/1080?grayscale", title: "Third Title", description: "This is the description of the Third slide" },
        ],

        numberCards: [1, 2, 3, 4, 5, 6, 7, 8, 9],

        portfofolioInfo: [
            { title: "titulo 1", body: "este es el body del proyecto numero 1", url:"https://picsum.photos/700/400?grayscale" },
            { title: "titulo 2", body: "este es el body del proyecto numero 2", url:"https://picsum.photos/700/400?grayscale" },
            { title: "titulo 3", body: "este es el body del proyecto numero 3", url:"https://picsum.photos/700/400?grayscale" },
            { title: "titulo 4", body: "este es el body del proyecto numero 4", url:"https://picsum.photos/700/400?grayscale" },
            { title: "titulo 5", body: "este es el body del proyecto numero 5", url:"https://picsum.photos/700/400?grayscale" },
            { title: "titulo 6", body: "este es el body del proyecto numero 6", url:"https://picsum.photos/700/400?grayscale" },
            { title: "titulo 7", body: "este es el body del proyecto numero 7", url:"https://picsum.photos/700/400?grayscale" },
            { title: "titulo 8", body: "este es el body del proyecto numero 8", url:"https://picsum.photos/700/400?grayscale" },
        ],

        actionphoto: "https://picsum.photos/700/450?grayscale"
    })

    return (
        <>
            <Navbar />

            <Header slide={state.galery} />

            <div className="container">

                <Welcome numberCard={state.numberCards} />

                <Portfolio infoPortfolio={state.portfofolioInfo} />

                <Action actionphoto={state.actionphoto}/>

            </div>

            <Footer />

        </>
    )

}

export default Home;

