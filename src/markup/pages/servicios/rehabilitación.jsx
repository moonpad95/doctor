import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Fade, Flip } from "react-reveal"

// Import Images
import bnrImg1 from "../../../images/banner/img1.jpg";
import waveBlue from "../../../images/shap/wave-blue.png";
import circleDots from "../../../images/shap/circle-dots.png";
import plusBlue from "../../../images/shap/plus-blue.png";
import galleryPic1 from "../../../images/rehabilitacion/bg.jpg";
import galleryPic2 from "../../../images/rehabilitacion/bg1.jpg";
import bg1 from "../../../images/rehabilitacion/bg.jpg"
import RehabilitacionServicesPost from '../../elements/variousServices/rehabilitacionServices';
import AuthorRehabilitacion from '../../elements/variousServices/authorRehabilitacion';


class Rehabilitacion extends Component {

    render() {
        return (
            <>
                <div className="page-content bg-white">
                    <div className="banner-wraper">
                        <div className="page-banner" style={{ backgroundImage: "url(" + bnrImg1 + ")" }}>
                            <Flip top>
                                <div className="container">
                                    <div className="page-banner-entry text-center">
                                        <h1>Terapia de Rehabilitacion</h1>
                                        <nav aria-label="breadcrumb" className="breadcrumb-row">
                                            <ul className="breadcrumb">
                                                <li className="breadcrumb-item"><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Inicio</Link></li>
                                                <li className="breadcrumb-item active" aria-current="page">Servicios Especializados</li>
                                                <li className="breadcrumb-item active" aria-current="page">Rehabilitación</li>
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
                                                    <h2 className="post-title">Renace con Esperanza: Tu Camino hacia la Recuperación.</h2>
                                                </div>
                                                <ul className="text-center" style={{display: "block"}}>
                                                    <li className="blocks-gallery-item"><img alt="" src={galleryPic1} style={{ width: "70%"}} /></li>
                                                </ul>
                                                <div className="ttr-post-text">
                                                    <p> Bienvenido a nuestro servicio de rehabilitación, un refugio de esperanza y transformación. Aquí, nos dedicamos a guiarte en tu camino hacia la recuperación y el renacimiento. </p>
                                                    <blockquote className="wp-block-quote">
                                                        <p>Nuestro equipo de profesionales comprometidos y compasivos está listo para brindarte el apoyo necesario en cada paso de tu rehabilitación.</p>
                                                    </blockquote>

                                                    <ul className="wp-block-gallery columns-6 is-cropped">
                                                        <li className="blocks-gallery-item"><img alt="" src={galleryPic2} /></li>
                                                    </ul>
                                                    <p>
                                                    Desde programas personalizados hasta un entorno cálido y acogedor, en nuestra clínica encontrarás el apoyo necesario para superar los desafíos y abrazar una vida plena y saludable. Enfrenta el futuro con confianza y deja que nuestra clínica sea tu aliada en el viaje hacia una nueva y positiva etapa de tu vida.
                                                    </p>
                                                </div>
                                                <div className="ttr-post-footer">
                                                    <div className="post-tags">
                                                        <strong>Etiquetas:</strong>
                                                        <Link to="#">Salud</Link>
                                                        <Link to="#">Terapia</Link>
                                                        <Link to="#">Rehabilitación</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <RehabilitacionServicesPost />
                                        <AuthorRehabilitacion />
                                    </div>
                                    <div className="col-md-12 col-lg-5 col-xl-5 mb-30">
                                        <aside className="side-bar sticky-top aside-bx">
                                            <div>
                                                <div className="contact-info ovpr-dark" style={{ backgroundImage: "url(" + bg1 + ")", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundAttachment: "fixed" }}>
                                                    <div className="info-inner">
                                                        <h4 className="title mb-5">¡LLamanos o envianos un WhatsApp ahora para agendar tu cita!</h4>
                                                        <div className="icon-box">
                                                            <h6 className="title mb-4"><i className="ti-map-alt"></i>Violeta 105, Hacienda las Flores, 34166.</h6>
                                                        </div>
                                                        <div className="icon-box">
                                                            {/* <a href="https://www.facebook.com/MediSpa/?paipv=0&eav=Afb468-vMHo6BBlHc9t57J_O1kaCJQyp2KKatQ3R1AMLnmZuCGlaC-dlXdTKbwOt51U&_rdr" title='Haga click para ir al perfil de Facebook' target='_blank' rel='noreferrer'><h6 className="title mb-4"><i class="fab fa-facebook fa-xs fa-fw"></i>@MediSpa</h6></a> */}
                                                            <a href="tel:6181137303" title='Haga click para ir a llamar' target='_blank' rel='noreferrer'><h6 className="title mb-4"><i class="fas fa-phone fa-xs fa-fw"></i>618-117-1661</h6></a>
                                                         <a href="https://wa.me/6181171661" title='Haga click para enviar un WhatsApp' target='_blank' rel='noreferrer'><h6 className='title mb-4'><i class="fab fa-whatsapp fa-xs fa-fw"></i>618-117-1661</h6></a>
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

export default Rehabilitacion;