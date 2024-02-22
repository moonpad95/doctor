import React, { Component } from 'react';

// Import Images
import recentBlogImg1 from "../../../images/laboratorio/promo1.jpg";
import recentBlogImg2 from "../../../images/laboratorio/promo2.jpg";
import recentBlogImg3 from "../../../images/laboratorio/promo3.webp";
import recentBlogImg4 from "../../../images/laboratorio/promo4.avif";
import recentBlogImg5 from "../../../images/laboratorio/promo5.webp";
import recentBlogImg6 from "../../../images/laboratorio/promo6.jpg";



import { Fade } from 'react-reveal';


class LaboratorioServicesPost extends Component{
	render(){
		return(
			<>
				<div className="widget recent-posts-entry">
					<h4 className="widget-title">Principales servicios de laboratorio</h4>
					<div className="widget-post-bx">
                        <Fade left>
						<div className="widget-post clearfix">
							<div className="ttr-post-media"> <img src={recentBlogImg1} width="200" height="143" alt=""/> </div>
							<div className="ttr-post-info">
								<div className="ttr-post-header">
									<h6 className="post-title">Hematología:</h6>
								</div>
								<ul className="post-meta">
									<li className="date"><i class="fas fa-vials fa-xs fa-fw"></i> Análisis de la sangre para evaluar glóbulos rojos, glóbulos blancos y plaquetas.</li>
								</ul>
							</div>
						</div>
                        </Fade>
                        <Fade left>
						<div className="widget-post clearfix">
							<div className="ttr-post-media"> <img src={recentBlogImg2} width="200" height="160" alt=""/> </div>
							<div className="ttr-post-info">
								<div className="ttr-post-header">
									<h6 className="post-title">Análisis de orina:</h6>
								</div>
								<ul className="post-meta">
									<li className="date"> <i class="fas fa-vials fa-xs fa-fw"></i> Evaluación de la salud renal y detección de posibles problemas en el tracto urinario.</li>
								</ul>
							</div>
						</div>
                        </Fade>
                        <Fade left>
						<div className="widget-post clearfix">
							<div className="ttr-post-media"> <img src={recentBlogImg3} width="200" height="160" alt=""/> </div>
							<div className="ttr-post-info">
								<div className="ttr-post-header">
									<h6 className="post-title">Pruebas de embarazo:</h6>
								</div>
								<ul className="post-meta">
									<li className="date"><i class="fas fa-vials fa-xs fa-fw"></i> Detección de hormonas indicativas de embarazo en la sangre o la orina.</li>
								</ul>
							</div>
						</div>
                        </Fade>
                        <Fade left>
						<div className="widget-post clearfix">
							<div className="ttr-post-media"> <img src={recentBlogImg6} width="200" height="160" alt=""/> </div>
							<div className="ttr-post-info">
								<div className="ttr-post-header">
									<h6 className="post-title">Medición de glucosa:</h6>
								</div>
								<ul className="post-meta">
									<li className="date"><i class="fas fa-vials fa-xs fa-fw"></i> Prueba para medir los niveles de glucosa en sangre en condiciones de ayuno.</li>
								</ul>
							</div>
						</div>
                        </Fade>
                        <Fade left>
						<div className="widget-post clearfix">
							<div className="ttr-post-media"> <img src={recentBlogImg4} width="200" height="160" alt=""/> </div>
							<div className="ttr-post-info">
								<div className="ttr-post-header">
									<h6 className="post-title">Prueba de grupo y factor sanguíneo:</h6>
								</div>
								<ul className="post-meta">
									<li className="date"><i class="fas fa-vials fa-xs fa-fw"></i> Determinación del tipo de sangre y factor Rh.</li>
								</ul>
							</div>
						</div>
                        </Fade>
                        <Fade left>
						<div className="widget-post clearfix">
							<div className="ttr-post-media"> <img src={recentBlogImg5} width="200" height="160" alt=""/> </div>
							<div className="ttr-post-info">
								<div className="ttr-post-header">
									<h6 className="post-title">Examen de enfermedades infecciosas:</h6>
								</div>
								<ul className="post-meta">
									<li className="date"><i class="fas fa-vials fa-xs fa-fw"></i> Detección de anticuerpos o antígenos para enfermedades como VIH, hepatitis, etc.</li>
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

export default LaboratorioServicesPost;