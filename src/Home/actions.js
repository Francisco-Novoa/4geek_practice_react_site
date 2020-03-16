import React from "react"

function Action (props){
    return (
        <>
        <div className="row">

        <div className="col-lg-6">
            <ul>
                <li>

                    <strong>Bootstrap v4</strong>

                </li>

                <li>jQuery</li>

                <li>Font Awesome</li>

                <li>Working contact form with validation</li>

                <li>Unstyled page elements for easy customization</li>

            </ul>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, omnis doloremque non cum id reprehenderit, quisquam totam aspernatur tempora minima unde aliquid ea culpa sunt. Reiciendis quia dolorum ducimus unde.</p>

        </div>

        <div className="col-lg-6">

            <img className="img-fluid rounded" src={props.actionphoto} alt="" />

        </div>

    </div>

    <hr />

    <div className="row mb-4">

        <div className="col-md-8">

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, expedita, saepe, vero rerum deleniti beatae veniam harum neque nemo praesentium cum alias asperiores commodi.</p>

        </div>

        <div className="col-md-4">

            <a className="btn btn-lg btn-secondary btn-block" href="#">Call to Action</a>

        </div>

    </div>
    </>
    )

}

export default Action


