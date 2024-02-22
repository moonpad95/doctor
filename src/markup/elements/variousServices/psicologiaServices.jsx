import React, { Component } from 'react';

// Import Images
import recentBlogImg2 from "../../../images/psicologia/promo2.jpg";
import recentBlogImg1 from "../../../images/psicologia/promo1.webp";
import recentBlogImg3 from "../../../images/psicologia/promo3.jpg";
import recentBlogImg4 from "../../../images/psicologia/promo4.jpg";
import recentBlogImg5 from "../../../images/psicologia/promo5.jpg";
import recentBlogImg6 from "../../../images/psicologia/promo6.jpg";



import { Fade } from 'react-reveal';


class PsicologiaServicesPost extends Component {
    render() {
        return (
            <>
                <div className="widget recent-posts-entry">
                    <h4 className="widget-title">Beneficios de recibir Terapia Psicológica</h4>
                    <div className="widget-post-bx">
                        <Fade left>
                            <div className="widget-post clearfix">
                                <div className="ttr-post-media"> <img src={recentBlogImg1} width="200" height="143" alt="" /> </div>
                                <div className="ttr-post-info">
                                    <div className="ttr-post-header">
                                        <h6 className="post-title">Alivio del Malestar Emocional:</h6>
                                    </div>
                                    <ul className="post-meta">
                                        <li className="date"><i class="fas fa-people-carry"></i> La terapia puede ayudar a reducir y gestionar síntomas de ansiedad, depresión, estrés, y otros problemas emocionales.</li>
                                    </ul>
                                </div>
                            </div>
                        </Fade>
                        <Fade left>
                            <div className="widget-post clearfix">
                                <div className="ttr-post-media"> <img src={recentBlogImg2} width="200" height="160" alt="" /> </div>
                                <div className="ttr-post-info">
                                    <div className="ttr-post-header">
                                        <h6 className="post-title">Desarrollo de Estrategias de Afrontamiento:</h6>
                                    </div>
                                    <ul className="post-meta">
                                        <li className="date"><i class="fas fa-people-carry"></i> A través de la terapia, las personas pueden aprender y practicar estrategias de afrontamiento efectivas para manejar el estrés, los desafíos y las dificultades de la vida.</li>
                                    </ul>
                                </div>
                            </div>
                        </Fade>
                        <Fade left>
                            <div className="widget-post clearfix">
                                <div className="ttr-post-media"> <img src={recentBlogImg3} width="200" height="160" alt="" /> </div>
                                <div className="ttr-post-info">
                                    <div className="ttr-post-header">
                                        <h6 className="post-title">Mejora de las Relaciones Interpersonales:</h6>
                                    </div>
                                    <ul className="post-meta">
                                        <li className="date"><i class="fas fa-people-carry"></i> La terapia puede abordar problemas de relación y mejorar las habilidades de comunicación, lo que puede tener un impacto positivo en las relaciones personales y profesionales.</li>
                                    </ul>
                                </div>
                            </div>
                        </Fade>
                        <Fade left>
                            <div className="widget-post clearfix">
                                <div className="ttr-post-media"> <img src={recentBlogImg6} width="200" height="160" alt="" /> </div>
                                <div className="ttr-post-info">
                                    <div className="ttr-post-header">
                                        <h6 className="post-title">Aumento de la Autoestima y Confianza:</h6>
                                    </div>
                                    <ul className="post-meta">
                                        <li className="date"><i class="fas fa-people-carry"></i> Trabajar con un terapeuta puede ayudar a fortalecer la autoestima y la confianza en uno mismo, fomentando una imagen más positiva de sí mismo.</li>
                                    </ul>
                                </div>
                            </div>
                        </Fade>
                        <Fade left>
                            <div className="widget-post clearfix">
                                <div className="ttr-post-media"> <img src={recentBlogImg4} width="200" height="160" alt="" /> </div>
                                <div className="ttr-post-info">
                                    <div className="ttr-post-header">
                                        <h6 className="post-title">Prevención de Problemas Futuros:</h6>
                                    </div>
                                    <ul className="post-meta">
                                        <li className="date"><i class="fas fa-people-carry"></i> La terapia no solo aborda los problemas actuales, sino que también puede ayudar a prevenir problemas futuros al proporcionar herramientas y habilidades para afrontar situaciones difíciles.</li>
                                    </ul>
                                </div>
                            </div>
                        </Fade>
                        <Fade left>
                            <div className="widget-post clearfix">
                                <div className="ttr-post-media"> <img src={recentBlogImg5} width="200" height="160" alt="" /> </div>
                                <div className="ttr-post-info">
                                    <div className="ttr-post-header">
                                        <h6 className="post-title">Crecimiento Personal:</h6>
                                    </div>
                                    <ul className="post-meta">
                                        <li className="date"><i class="fas fa-people-carry"></i> La terapia puede ser un espacio para el crecimiento personal y el desarrollo de metas y aspiraciones, ayudando a las personas a alcanzar su máximo potencial.</li>
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

export default PsicologiaServicesPost;