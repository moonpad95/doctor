import React, { Component } from 'react';

// Import Images
import recentBlogImg2 from "../../../images/nutricional/promo2.jpg";
import recentBlogImg1 from "../../../images/nutricional/promo1.jpg";
import recentBlogImg3 from "../../../images/nutricional/promo3.jpg";
import recentBlogImg4 from "../../../images/nutricional/promo4.jpg";
import recentBlogImg5 from "../../../images/nutricional/promo5.jpg";
import recentBlogImg6 from "../../../images/nutricional/promo6.jpg";



import { Fade } from 'react-reveal';


class NutricionServicesPost extends Component {
    render() {
        return (
            <>
                <div className="widget recent-posts-entry">
                    <h4 className="widget-title">Beneficios de una nutricion adecuada</h4>
                    <div className="widget-post-bx">
                        <Fade left>
                            <div className="widget-post clearfix">
                                <div className="ttr-post-media"> <img src={recentBlogImg1} width="200" height="143" alt="" /> </div>
                                <div className="ttr-post-info">
                                    <div className="ttr-post-header">
                                        <h6 className="post-title">Asesoramiento Personalizado:</h6>
                                    </div>
                                    <ul className="post-meta">
                                        <li className="date"><i class="fas fa-apple-alt"></i>  Te ofrecemos servicio de asesoramiento individualizado, teniendo en cuenta tus necesidades específicas, objetivos y condiciones de salud.</li>
                                    </ul>
                                </div>
                            </div>
                        </Fade>
                        <Fade left>
                            <div className="widget-post clearfix">
                                <div className="ttr-post-media"> <img src={recentBlogImg2} width="200" height="160" alt="" /> </div>
                                <div className="ttr-post-info">
                                    <div className="ttr-post-header">
                                        <h6 className="post-title">Planificación de Dieta Equilibrada:</h6>
                                    </div>
                                    <ul className="post-meta">
                                        <li className="date"><i class="fas fa-apple-alt"></i> Planificación y diseño de planes de alimentación equilibrados que satisfacen tus requerimientos nutricionales, asegurando la obtención de todos los nutrientes esenciales.</li>
                                    </ul>
                                </div>
                            </div>
                        </Fade>
                        <Fade left>
                            <div className="widget-post clearfix">
                                <div className="ttr-post-media"> <img src={recentBlogImg3} width="200" height="160" alt="" /> </div>
                                <div className="ttr-post-info">
                                    <div className="ttr-post-header">
                                        <h6 className="post-title">Control de Peso:</h6>
                                    </div>
                                    <ul className="post-meta">
                                        <li className="date"><i class="fas fa-apple-alt"></i> Estrategias para controlar el peso de manera saludable y sostenible, adaptadas a tu cuerpo y estilo de vida.</li>
                                    </ul>
                                </div>
                            </div>
                        </Fade>
                        <Fade left>
                            <div className="widget-post clearfix">
                                <div className="ttr-post-media"> <img src={recentBlogImg6} width="200" height="160" alt="" /> </div>
                                <div className="ttr-post-info">
                                    <div className="ttr-post-header">
                                        <h6 className="post-title">Prevención y Manejo de Enfermedades:</h6>
                                    </div>
                                    <ul className="post-meta">
                                        <li className="date"><i class="fas fa-apple-alt"></i> Ayuda en la prevención y manejo de condiciones médicas como la diabetes, enfermedades cardíacas, hipertensión y otras relacionadas con la alimentación.</li>
                                    </ul>
                                </div>
                            </div>
                        </Fade>
                        <Fade left>
                            <div className="widget-post clearfix">
                                <div className="ttr-post-media"> <img src={recentBlogImg4} width="200" height="160" alt="" /> </div>
                                <div className="ttr-post-info">
                                    <div className="ttr-post-header">
                                        <h6 className="post-title">Mejora del Rendimiento Deportivo:</h6>
                                    </div>
                                    <ul className="post-meta">
                                        <li className="date"><i class="fas fa-apple-alt"></i> Para aquellos que participan en actividades físicas, ofrecemos servicios nutricionales especiales  para optimizar la dieta, mejorar el rendimiento y acelerar la recuperación.</li>
                                    </ul>
                                </div>
                            </div>
                        </Fade>
                        <Fade left>
                            <div className="widget-post clearfix">
                                <div className="ttr-post-media"> <img src={recentBlogImg5} width="200" height="160" alt="" /> </div>
                                <div className="ttr-post-info">
                                    <div className="ttr-post-header">
                                        <h6 className="post-title">Promoción del Bienestar General:</h6>
                                    </div>
                                    <ul className="post-meta">
                                        <li className="date"><i class="fas fa-apple-alt"></i> La consulta nutricional puede contribuir a un mayor bienestar general, proporcionando las herramientas necesarias para mantener una vida saludable y equilibrada.</li>
                                    </ul>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </>
        );
    }
}

export default NutricionServicesPost;