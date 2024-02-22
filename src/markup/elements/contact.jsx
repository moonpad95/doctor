import React from "react";
import Formulario from "./form";
import bgImage from "../../images/medicina.jpg";
import Fade from "react-reveal"

function Cont() {
    return (
        <>
            <section style={{ alignContent: "center"}}>
                <Fade right>
                    <div className="contact-info ovpr-dark" style={{ backgroundImage: "url(" + bgImage + ")", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundAttachment: "fixed" }}>
                        <div>
                            <div className="container">
                                <Formulario />
                            </div>
                        </div>
                    </div>
                </Fade>
            </section>
        </>

    );
}

export default Cont;
