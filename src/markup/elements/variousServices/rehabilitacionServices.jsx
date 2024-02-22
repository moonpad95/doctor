import React, { Component } from 'react';

// Import Images
import recentBlogImg1 from "../../../images/rehabilitacion/promo1.jpeg";
import recentBlogImg2 from "../../../images/rehabilitacion/promo2.jpg";
import recentBlogImg3 from "../../../images/rehabilitacion/promo3.webp";
import recentBlogImg4 from "../../../images/rehabilitacion/promo4.jpg";
import recentBlogImg5 from "../../../images/rehabilitacion/promo5.jpg";
import recentBlogImg6 from "../../../images/rehabilitacion/promo6.webp";



import { Fade } from 'react-reveal';


class RehabilitacionServicesPost extends Component{
	render(){
		return(
			<>
				<div className="widget recent-posts-entry">
					<h4 className="widget-title">Beneficios de la Terapia de Rehabilitación</h4>
					<div className="widget-post-bx">
                        <Fade left>
						<div className="widget-post clearfix">
							<div className="ttr-post-media"> <img src={recentBlogImg1} width="200" height="143" alt=""/> </div>
							<div className="ttr-post-info">
								<div className="ttr-post-header">
									<h6 className="post-title">Recuperación Física:</h6>
								</div>
								<ul className="post-meta">
									<li className="date"><i class="fab fa-accessible-icon"></i>La terapia de rehabilitación ayuda a restaurar la función física, mejorando la fuerza, flexibilidad y coordinación. Esto es esencial para recuperarse de lesiones ortopédicas, accidentes cerebrovasculares u otras afecciones médicas.</li>
								</ul>
							</div>
						</div>
                        </Fade>
                        <Fade left>
						<div className="widget-post clearfix">
							<div className="ttr-post-media"> <img src={recentBlogImg2} width="200" height="160" alt=""/> </div>
							<div className="ttr-post-info">
								<div className="ttr-post-header">
									<h6 className="post-title">Manejo de dolencias:</h6>
								</div>
								<ul className="post-meta">
									<li className="date"><i class="fab fa-accessible-icon"></i> Los programas de rehabilitación incluyen técnicas para gestionar y reducir el dolor, proporcionando alivio a quienes sufren de dolor crónico o agudo.</li>
								</ul>
							</div>
						</div>
                        </Fade>
                        <Fade left>
						<div className="widget-post clearfix">
							<div className="ttr-post-media"> <img src={recentBlogImg3} width="200" height="160" alt=""/> </div>
							<div className="ttr-post-info">
								<div className="ttr-post-header">
									<h6 className="post-title">Mejora de la Movilidad:</h6>
								</div>
								<ul className="post-meta">
									<li className="date"><i class="fab fa-accessible-icon"></i> Los ejercicios y terapias específicas ayudan a mejorar la movilidad, permitiendo a los pacientes recuperar la capacidad de caminar, moverse y realizar actividades diarias.</li>
								</ul>
							</div>
						</div>
                        </Fade>
                        <Fade left>
						<div className="widget-post clearfix">
							<div className="ttr-post-media"> <img src={recentBlogImg6} width="200" height="160" alt=""/> </div>
							<div className="ttr-post-info">
								<div className="ttr-post-header">
									<h6 className="post-title">Restauración de Funciones Cotidianas:</h6>
								</div>
								<ul className="post-meta">
									<li className="date"><i class="fab fa-accessible-icon"></i> La terapia de rehabilitación se centra en ayudar a los pacientes a recuperar habilidades esenciales para la vida diaria, como vestirse, comer, asearse y realizar otras actividades básicas.</li>
								</ul>
							</div>
						</div>
                        </Fade>
                        <Fade left>
						<div className="widget-post clearfix">
							<div className="ttr-post-media"> <img src={recentBlogImg4} width="200" height="160" alt=""/> </div>
							<div className="ttr-post-info">
								<div className="ttr-post-header">
									<h6 className="post-title">Integración Social:</h6>
								</div>
								<ul className="post-meta">
									<li className="date"><i class="fab fa-accessible-icon"></i> La rehabilitación facilita la reintegración social, ayudando a los pacientes a recuperar la confianza y a participar nuevamente en actividades sociales y comunitarias.</li>
								</ul>
							</div>
						</div>
                        </Fade>
                        <Fade left>
						<div className="widget-post clearfix">
							<div className="ttr-post-media"> <img src={recentBlogImg5} width="200" height="160" alt=""/> </div>
							<div className="ttr-post-info">
								<div className="ttr-post-header">
									<h6 className="post-title">Mejora de la Calidad de Vida:</h6>
								</div>
								<ul className="post-meta">
									<li className="date"><i class="fab fa-accessible-icon"></i> Uno de los objetivos de la terapia de rehabilitacion es mejorar la calidad de vida general de los pacientes, permitiéndoles disfrutar de una vida más plena y satisfactoria.</li>
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

export default RehabilitacionServicesPost;