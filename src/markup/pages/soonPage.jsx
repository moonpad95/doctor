import React, { Component } from 'react';

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";
import { Fade } from 'react-reveal';

class ComingSoon extends Component {

    render() {
        return (
            <>
                <div className="page-content bg-white">
                    <div className="banner-wraper">
                        <div className="page-banner" style={{ backgroundImage: "url(" + bnrImg1 + ")" }}>
                            <div className="container">
                                <Fade top>
                                    <div className="page-banner-entry text-center">
                                        <h1> <i class="fas fa-rocket"></i> PROXIMAMENTE <i class="fas fa-file-medical"></i></h1>
                                    </div>
                                </Fade>
                            </div>
                            <img className="pt-img1 animate-wave" src={waveBlue} alt="" />
                            <img className="pt-img2 animate2" src={circleDots} alt="" />
                            <img className="pt-img3 animate-rotate" src={plusBlue} alt="" />
                        </div>
                    </div>
                    <section className="section-area section-sp2 error-404">
                        <div className="container">
                            <div className="inner-content">
                                <h3 className="error-text">Proximamente, este recurso será añadido. En caso de mayores dudas puedes preguntar en la sección de: <a href="/preguntas" className='btn btn-block btn-primary m-5'>Preguntas Frecuentes</a> </h3>
                            </div>
                        </div>
                    </section>
                </div>
            </>
        );
    }
}

export default ComingSoon;