import React, { Component } from 'react';

// Import Images
import recentBlogImg1 from "../../../images/terapia-comunicacion/promo1.avif";
import recentBlogImg2 from "../../../images/terapia-comunicacion/promo2.jpg";
import recentBlogImg3 from "../../../images/terapia-comunicacion/promo3.jpg";
import recentBlogImg4 from "../../../images/terapia-comunicacion/promo4.jpg";
import recentBlogImg5 from "../../../images/terapia-comunicacion/promo5.png";
import recentBlogImg6 from "../../../images/terapia-comunicacion/promo6.webp";



import { Fade } from 'react-reveal';


class TerapiaServicesPost extends Component{
	render(){
		return(
			<>
				<div className="widget recent-posts-entry">
					<h4 className="widget-title">Beneficios de la Terapia del Lenguaje</h4>
					<div className="widget-post-bx">
                        <Fade left>
						<div className="widget-post clearfix">
							<div className="ttr-post-media"> <img src={recentBlogImg1} width="200" height="143" alt=""/> </div>
							<div className="ttr-post-info">
								<div className="ttr-post-header">
									<h6 className="post-title">Mejora de Habilidades Sociales:</h6>
								</div>
								<ul className="post-meta">
									<li className="date"><i class="fa fa-language" aria-hidden="true"></i>Desarrollo y mejora de habilidades lingüísticas, ampliación del vocabulario y mejora de la pronunciación y la articulación.</li>
								</ul>
							</div>
						</div>
                        </Fade>
                        <Fade left>
						<div className="widget-post clearfix">
							<div className="ttr-post-media"> <img src={recentBlogImg2} width="200" height="160" alt=""/> </div>
							<div className="ttr-post-info">
								<div className="ttr-post-header">
									<h6 className="post-title">Comunicación No Verbal:</h6>
								</div>
								<ul className="post-meta">
									<li className="date"> <i class="fa fa-language" aria-hidden="true"></i> Desarrollo de habilidades de comunicación no verbal y mejora de la expresión facial, gestos y postura.</li>
								</ul>
							</div>
						</div>
                        </Fade>
                        <Fade left>
						<div className="widget-post clearfix">
							<div className="ttr-post-media"> <img src={recentBlogImg3} width="200" height="160" alt=""/> </div>
							<div className="ttr-post-info">
								<div className="ttr-post-header">
									<h6 className="post-title">Tratamiento de Trastornos del Habla y del Lenguaje:</h6>
								</div>
								<ul className="post-meta">
									<li className="date"><i class="fa fa-language" aria-hidden="true"></i>Abordaje de trastornos del habla como la dislexia, la tartamudez, entre otros y tratamiento de dificultades específicas del lenguaje.</li>
								</ul>
							</div>
						</div>
                        </Fade>
                        <Fade left>
						<div className="widget-post clearfix">
							<div className="ttr-post-media"> <img src={recentBlogImg6} width="200" height="160" alt=""/> </div>
							<div className="ttr-post-info">
								<div className="ttr-post-header">
									<h6 className="post-title">Tratamiento de problemas de lectura y escritura:</h6>
								</div>
								<ul className="post-meta">
									<li className="date"><i class="fa fa-language" aria-hidden="true"></i>Abordaje de trastornos relacionados con la escritura y la lectura para niños y adultos.</li>
								</ul>
							</div>
						</div>
                        </Fade>
                        <Fade left>
						<div className="widget-post clearfix">
							<div className="ttr-post-media"> <img src={recentBlogImg4} width="200" height="160" alt=""/> </div>
							<div className="ttr-post-info">
								<div className="ttr-post-header">
									<h6 className="post-title">Intervención en Problemas de Audición:</h6>
								</div>
								<ul className="post-meta">
									<li className="date"><i class="fa fa-language" aria-hidden="true"></i>Asistencia en el desarrollo de habilidades comunicativas para personas con problemas de audición.</li>
								</ul>
							</div>
						</div>
                        </Fade>
                        <Fade left>
						<div className="widget-post clearfix">
							<div className="ttr-post-media"> <img src={recentBlogImg5} width="200" height="160" alt=""/> </div>
							<div className="ttr-post-info">
								<div className="ttr-post-header">
									<h6 className="post-title">Mejora de la Autoestima y la Confianza:</h6>
								</div>
								<ul className="post-meta">
									<li className="date"><i class="fa fa-language" aria-hidden="true"></i>Fomento de la confianza en la expresión oral y mejora de la autoestima a través del éxito en la comunicación.</li>
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

export default TerapiaServicesPost;