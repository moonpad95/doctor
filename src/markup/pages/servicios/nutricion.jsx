import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Fade, Flip } from "react-reveal"

// Import Images
import bnrImg1 from "../../../images/banner/img1.jpg";
import waveBlue from "../../../images/shap/wave-blue.png";
import circleDots from "../../../images/shap/circle-dots.png";
import plusBlue from "../../../images/shap/plus-blue.png";
import galleryPic1 from "../../../images/nutricional/bg1.jpg";
import galleryPic2 from "../../../images/nutricional/bg2.jpg";
import bg1 from "../../../images/rehabilitacion/bg.jpg"
import NutricionServicesPost from '../../elements/variousServices/nutricionServices';
import AuthorNutricion from '../../elements/variousServices/authorNutricion';

class Nutricional extends Component {

    render() {
        return (
            <>
                <div className="page-content bg-white">
                    <div className="banner-wraper">
                        <div className="page-banner" style={{ backgroundImage: "url(" + bnrImg1 + ")" }}>
                            <Flip top>
                                <div className="container">
                                    <div className="page-banner-entry text-center">
                                        <h1>Consulta Nutricional</h1>
                                        <nav aria-label="breadcrumb" className="breadcrumb-row">
                                            <ul className="breadcrumb">
                                                <li className="breadcrumb-item"><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Inicio</Link></li>
                                                <li className="breadcrumb-item active" aria-current="page">Servicios Especializados</li>
                                                <li className="breadcrumb-item active" aria-current="page">Nutrición</li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </Flip>
                            <img className="pt-img1 animate-wave" src={waveBlue} alt="" />
                            <img className="pt-img2 animate2" src={circleDots} alt="" />
                            <img className="pt-img3 animate-rotate" src={plusBlue} alt="" />
                        </div>
                    </div>
                    <section className="section-area section-sp1 bg-white">
                        <div className="container">
                            <Fade bottom>
                                <div className="row">
                                    <div className="col-md-12 col-lg-7 col-xl-7 mb-30 mb-md-50">
                                        <div className="blog-card blog-single">
                                            <div className="info-bx">
                                                <div className="ttr-post-title">
                                                    <h2 className="post-title">Nutrición para tu bienestar, salud en cada alimento.</h2>
                                                </div>
                                                <ul className="text-center" style={{ display: "block" }}>
                                                    <li className="blocks-gallery-item"><img alt="" src={galleryPic1} style={{ width: "90%" }} /></li>
                                                </ul>
                                                <div className="ttr-post-text">
                                                    <p> Bienvenido a nuestro servicio nutricional MEDI KT, donde cuidamos de tu salud desde la mesa y promovemos los buenos hábitos alimenticios.</p>
                                                    <blockquote className="wp-block-quote">
                                                        <p> Estamos comprometidos en guiarte hacia un estilo de vida saludable, ofreciéndote asesoramiento personalizado y planes nutricionales adaptados a tus necesidades. Descubre el camino hacia una alimentación equilibrada, energía renovada y bienestar duradero</p>
                                                    </blockquote>
                                                    <ul className="wp-block-gallery columns-6 is-cropped">
                                                        <li className="blocks-gallery-item"><img alt="" src={galleryPic2} /></li>
                                                    </ul>
                                                    <p>
                                                    Tu viaje hacia una vida más saludable comienza aquí.
                                                    </p>
                                                </div>
                                                <div className="ttr-post-footer">
                                                    <div className="post-tags">
                                                        <strong>Etiquetas:</strong>
                                                        <Link to="#">Salud</Link>
                                                        <Link to="#">Nutrición</Link>
                                                        <Link to="#">Bienestar</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <NutricionServicesPost />
                                        <AuthorNutricion />
                                    </div>
                                    <div className="col-md-12 col-lg-5 col-xl-5 mb-30">
                                        <aside className="side-bar sticky-top aside-bx">
                                            <div>
                                                <div className="contact-info ovpr-dark" style={{ backgroundImage: "url(" + bg1 + ")", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundAttachment: "fixed" }}>
                                                    <div className="info-inner">
                                                        <h4 className="title mb-5">¡LLamanos o envianos un WhatsApp ahora para agendar tu cita!</h4>
                                                        <p className='title mb-5'>
                                                            Puedes presionar en el ícono correspondiente para llamar o enviar un WhatsApp
                                                        </p>
                                                        <div className="icon-box">
                                                            <h6 className="title mb-4"><i className="ti-map-alt"></i>Violeta 105, Hacienda las Flores, 34166.</h6>
                                                        </div>
                                                        <div className="icon-box">
                                                            {/* <a href="https://www.facebook.com/MediSpa/?paipv=0&eav=Afb468-vMHo6BBlHc9t57J_O1kaCJQyp2KKatQ3R1AMLnmZuCGlaC-dlXdTKbwOt51U&_rdr" title='Haga click para ir al perfil de Facebook' target='_blank' rel='noreferrer'><h6 className="title mb-4"><i class="fab fa-facebook fa-xs fa-fw"></i>@MediSpa</h6></a> */}
                                                            <a href="tel:6181452269" title='Haga click para ir a llamar' target='_blank' rel='noreferrer'><h6 className="title mb-4"><i class="fas fa-phone fa-xs fa-fw"></i>618-145-2269</h6></a>
                                                            <a href="https://wa.me/6181452269" title='Haga click para enviar un WhatsApp' target='_blank' rel='noreferrer'><h6 className='title mb-4'><i class="fab fa-whatsapp fa-xs fa-fw"></i>618-145-2269</h6></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </aside>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </section>

                </div>

            </>
        );
    }
}

export default Nutricional;