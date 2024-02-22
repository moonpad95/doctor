import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Accordion} from 'react-bootstrap';

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";
import servicesPic1 from "../../images/services/dentista.jpeg";
import pdf from "../../images/icon/pdf.png";
import doc from "../../images/icon/doc.png";

class ServiceDetail extends Component{
	
	render(){
		return (
			<>
				
				<div className="page-content bg-white">
					
					<div className="banner-wraper">
						<div className="page-banner" style={{backgroundImage: "url("+bnrImg1+")"}}>
							<div className="container">
								<div className="page-banner-entry text-center">
									<h1>SERVICIO DENTAL</h1>
									<nav aria-label="breadcrumb" className="breadcrumb-row">
										<ul className="breadcrumb">
											<li className="breadcrumb-item"><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> INICIO</Link></li>
											<li className="breadcrumb-item active" aria-current="page">Servicio Dental</li>
										</ul>
									</nav>
								</div>
							</div>
							<img className="pt-img1 animate-wave" src={waveBlue} alt=""/>
							<img className="pt-img2 animate2" src={circleDots} alt=""/>
							<img className="pt-img3 animate-rotate" src={plusBlue} alt=""/>
						</div>
					</div>
					
					<section className="section-area section-sp1">
						<div className="container">
							<div className="row">
								<div className="col-lg-8 mb-30">
									<div className="ttr-media mb-30">
										<img src={servicesPic1} className="rounded" alt=""/>
									</div>
									<div className="clearfix">
										<div className="head-text mb-30">
											<h2 className="title mb-15">MDIKT te ofrece un servicio dental especializado</h2>
											<p className="mb-0">Para el este servicio contamos con la Dra.XXXXXXXXXXX con experiencia en xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
										</div>
										<div className="row align-items-center">
											<div className="col-md-6 mb-30">
												<ul className="list-check-squer mb-0">
													<li>IMPLANTACIÓN DE CORONAS</li>
													<li>LIMPIEZA DENTAL</li>
													<li>EXTRACCIÓN MOLAR</li>
													<li>RESINAS</li>
													<li>CIRUGÍA</li>
												</ul>
											</div>
										
										</div>
									</div>
									<div className="clearfix">
										<div className="head-text mb-30">
											<h4 className="title mb-10">Preguntas Frecuentes</h4>
											<p className="mb-0">En la siguiente sección podŕas encontrar una seria de preguntas y respuestas para brindarte un mejor servicio</p>
										</div>
										<Accordion defaultActiveKey="0" className="accordion ttr-accordion1">
											<Accordion.Item eventKey="0">
												<Accordion.Header>Cuál es su hubicación?</Accordion.Header>
												<Accordion.Body>
													<p className="mb-0">Avenida Carrasco #200. Fracc. Las Flores Durango,Dgo</p>
												</Accordion.Body>
											</Accordion.Item>
											<Accordion.Item eventKey="1">
												<Accordion.Header>¿?</Accordion.Header>
												<Accordion.Body>
													<p className="mb-0">¿?</p>
												</Accordion.Body>
											</Accordion.Item>
											<Accordion.Item eventKey="2">
												<Accordion.Header>¿?</Accordion.Header>
												<Accordion.Body>
													<p className="mb-0">¿?</p>
												</Accordion.Body>
											</Accordion.Item>
											<Accordion.Item eventKey="3">
												<Accordion.Header>¿?</Accordion.Header>
												<Accordion.Body>
													<p className="mb-0">¿?</p>
												</Accordion.Body>
											</Accordion.Item>
											<Accordion.Item eventKey="4">
												<Accordion.Header>¿?</Accordion.Header>
												<Accordion.Body>
													<p className="mb-0">¿?</p>
												</Accordion.Body>
											</Accordion.Item>
											<Accordion.Item eventKey="5">
												<Accordion.Header>Cómo agendar una cita?</Accordion.Header>
												<Accordion.Body>
													<p className="mb-0">Directamente al WhatsApp 618-1-23-54-65</p>
												</Accordion.Body>
											</Accordion.Item>
										</Accordion>
									</div>
								</div>
								<div className="col-lg-4">
									<aside className="sticky-top pb-1">
										<div className="widget">
											<ul className="service-menu">
												<li className="active"><Link to="/service-detail"><span>Servcio XXXXXXX</span><i className="fa fa-angle-right"></i></Link></li>
												<li><Link to="/service-detail"><span>Servcio XXXXXXX</span><i className="fa fa-angle-right"></i></Link></li>
												<li><Link to="/service-detail"><span>Servcio XXXXXXX</span><i className="fa fa-angle-right"></i></Link></li>
												<li><Link to="/service-detail"><span>Servcio XXXXXXX</span><i className="fa fa-angle-right"></i></Link></li>
												<li><Link to="/service-detail"><span>Servcio XXXXXXX</span><i className="fa fa-angle-right"></i></Link></li>
												<li><Link to="/service-detail"><span>Servcio XXXXXXX</span><i className="fa fa-angle-right"></i></Link></li>
											</ul>
										</div>
										<div className="widget">
											<div className="brochure-bx">
												<h5 className="title-head">Archivos relacionados</h5>
												<Link to="#" className="download-link">
													<img src={pdf} alt=""/>
													<h5 className="title">Descargar Cedula</h5>
													<span>Descargar</span>
												</Link>
												<Link to="#" className="download-link">
													<img src={doc} alt=""/>
													<h5 className="title">Descargar CFDI</h5>
													<span>Descargar</span>
												</Link>
											</div>
										</div>
										
									</aside>
								</div>
							</div>
						</div>
					</section>
					
				</div>
				
			</>
		);
	}
}

export default ServiceDetail;