import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';
import Slide from "react-reveal/Slide"
import Fade from "react-reveal"
// Elements
import LatestNewsSection from "../elements/latest-news-slider";

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";

class Faq extends Component {

	render() {
		return (
			<>
				<Fade left>
					<div className="page-content bg-white">
						<div className="banner-wraper">
							<div className="page-banner" style={{ backgroundImage: "url(" + bnrImg1 + ")" }}>
								<div className="container">
									<div className="page-banner-entry text-center">
										<h1>Preguntas Frecuentes</h1>
										<nav aria-label="breadcrumb" className="breadcrumb-row">
											<ul className="breadcrumb">
												<li className="breadcrumb-item"><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Inicio</Link></li>
												<li className="breadcrumb-item active" aria-current="page">Faq's</li>
											</ul>
										</nav>
									</div>
								</div>
								<img className="pt-img1 animate-wave" src={waveBlue} alt="" />
								<img className="pt-img2 animate2" src={circleDots} alt="" />
								<img className="pt-img3 animate-rotate" src={plusBlue} alt="" />
							</div>
						</div>

						<section className="section-sp3">
							<div className="container">
								<h1 style={{ marginBottom: "10vh", textAlign: "center" }}>Consulta las preguntas más frecuentes de nuestros pacientes</h1>
								<div className="row">
									<div className="col-lg-12">
										<Accordion defaultActiveKey="0" className="accordion ttr-accordion1">
											<Slide right>
												<Accordion.Item eventKey="0">
													<Accordion.Header>¿Quienes somos?</Accordion.Header>
													<Accordion.Body>
														<p className="mb-0">Somos el corporativo MEDI-KT(medicate) enfocados en brindar un servicio de calidad y a tu alcance.</p>
													</Accordion.Body>
												</Accordion.Item>
											</Slide>
											<Slide left>
												<Accordion.Item eventKey="1">
													<Accordion.Header>¿Donde nos ubicamos?</Accordion.Header>
													<Accordion.Body>
														<p className="mb-0">Puedes encontrarnos en Calle Violeta en el número 115 en el fraccionamiento Las Flores. Actualmente tenemos sede unicamente en la ciudad de Durango, Durango.</p>
													</Accordion.Body>
												</Accordion.Item>
											</Slide>
											<Slide right>
												<Accordion.Item eventKey="2">
													<Accordion.Header>¿Cómo puedo agendar una cita?</Accordion.Header>
													<Accordion.Body>
														<p className="mb-0">Para agendar una cita puedes venir hasta nuestra clínica presencialmente, llamar a los telefonos en la seccion de <a href="/contacto">CONTACTO</a> o enviarnos un correo en la misma sección .</p>
													</Accordion.Body>
												</Accordion.Item>
											</Slide>
											<Slide left>
												<Accordion.Item eventKey="3">
													<Accordion.Header>¿Cuales son sus métodos de pago?</Accordion.Header>
													<Accordion.Body>
														<p className="mb-0">Contamos con pagos en efectivo, pagos con tarjeta en sucursal o mediante transferencia bancaria en la sección de <a href="/contacto">CONTACTO</a></p>
													</Accordion.Body>
												</Accordion.Item>
											</Slide>
											<Slide right>
												<Accordion.Item eventKey="4">
													<Accordion.Header>¿En que horario me pueden atender?</Accordion.Header>
													<Accordion.Body>
														<p className="mb-0">Nuestro horario es de Lunes a Domingo de 8:00 AM a 8:00 PM.</p>
													</Accordion.Body>
												</Accordion.Item>
											</Slide>
											<Slide left>
												<Accordion.Item eventKey="5">
													<Accordion.Header>¿Qué servicios tienen?</Accordion.Header>
													<Accordion.Body>
														<p className="mb-0"> Puedes consultar nuestro catalogo de servicio en la pestaña de <a href="/servicios">SERVICIOS</a>.</p>
													</Accordion.Body>
												</Accordion.Item>
											</Slide>
											<Slide right>
												<Accordion.Item eventKey="6">
													<Accordion.Header>¿Cuentan con redes sociales?</Accordion.Header>
													<Accordion.Body>
														<p className="mb-0"> Si, nuestro facebook es: <button className='btn-info btn btn-xs' onClick={() => window.open('https://www.facebook.com/people/Corporativo-Medi-kt/100009183422712')}>Corporativo Medikt</button> y nuestro perfil de instagram es: <button className='btn btn-xs btn-danger text-white' onClick={() => window.open('https://www.instagram.com/drjesusavila777/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==')}>drjesusavila77</button>.</p>
													</Accordion.Body>

												</Accordion.Item>
											</Slide>
										</Accordion>
									</div>
									{/* <div className="col-lg-6">
									<Accordion className="accordion ttr-accordion1">
										<Accordion.Item eventKey="0">
											<Accordion.Header>How do I withdraw from a subject?</Accordion.Header>
											<Accordion.Body>
												<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="1">
											<Accordion.Header>What’s a payment statement?</Accordion.Header>
											<Accordion.Body>
												<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="2">
											<Accordion.Header>How Can I Contact You?</Accordion.Header>
											<Accordion.Body>
												<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="3">
											<Accordion.Header>How do I withdraw from a subject?</Accordion.Header>
											<Accordion.Body>
												<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="4">
											<Accordion.Header>Understand Doctor Before You Regret?</Accordion.Header>
											<Accordion.Body>
												<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="5">
											<Accordion.Header>How Doctor Can Ease Your Pain?</Accordion.Header>
											<Accordion.Body>
												<p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
											</Accordion.Body>
										</Accordion.Item>
									</Accordion>
								</div> */}
								</div>
							</div>
						</section>

						<LatestNewsSection />
					</div>
				</Fade>
			</>
		);
	}
}

export default Faq;